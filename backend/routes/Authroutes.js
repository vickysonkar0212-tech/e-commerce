const express = require("express");

const authController =require("../controller/Authcontroller")
const router = express.Router();

// REGISTER ROUTE
router.post("/register", authController.registerUser);

// LOGIN ROUTE
router.post("/login", authController.loginUser  );
router.post("/verify", authController.verifyOtp  );
router.post("/resend", authController.resendOtp  );
// // LOGIN ROUTE
// router.post("/forgot", authController.forgotPassword);
module.exports = router;
