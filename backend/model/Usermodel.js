const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    phone: {
      type: String,
      required: false,
    },

    address: {
      type: String,
      required: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    otp: {
  type: String,
},
otpExpire: {
  type: Date,
}

  },
  {
    timestamps: true, // createdAt / updatedAt
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
