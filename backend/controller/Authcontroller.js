const User = require("../model/Usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendmail } = require("../services/Mail");
const generateOTP = require("../services/OTPhandler")

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = generateOTP();

    // Create user with OTP and 10 min expiry
    const user = new User({
      name,
      email,
      password: hashedPassword,
      otp: otp,
      otpExpire: Date.now() + 10 * 60 * 1000, // 10 minutes
    });

    await user.save();

    // Send OTP via email
    await sendmail(
      email,
      "Your OTP Code",
      `Hii ${name},\nYour OTP is: ${otp}\nIt will expire in 10 minutes.`
    );

    res.status(201).json({
      message: "User registered successfully. OTP sent to your email.",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


// LOGIN
exports.loginUser = async (req, res) => {
  try {
    const {email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

     const token = jwt.sign(user.toObject(), 'apikey');

    res.json({ message: "Login successful",data:{token}, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.otp !== otp)
      return res.status(400).json({ message: "Invalid OTP" });

    if (user.otpExpire < Date.now())
      return res.status(400).json({ message: "OTP expired" });

    // OTP verified, clear fields
    user.otp = null;
    user.otpExpire = null;
    await user.save();

    res.json({ message: "OTP verified successfully!" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpire = Date.now() + 10 * 60 * 1000;
    await user.save();

    await sendmail(
      email,
      "Your OTP Code",
      `Your new OTP is: ${otp}\nIt will expire in 10 minutes.`
    );

    res.json({ message: "OTP resent successfully." });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


