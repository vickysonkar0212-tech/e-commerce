
const UserModel = require("../model/Usermodel");
const jwt = require("jsonwebtoken");

const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization; // expecting raw token only
    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    // verify token
    const decoded = jwt.verify(token, "apikey");

    // fetch user from DB
    const user = await UserModel.findById(decoded._id);

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    return res.status(200).json({
      status: true,
      message: "Get user details",
      data: user
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

 module.exports = {getUser};
