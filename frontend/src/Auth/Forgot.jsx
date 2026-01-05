// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Forgot = () => {
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const handleForgot = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/auth/forgot",{ email }
//       );
      
//       toast.success(response?.data?.message || "OTP Sent Successfully!");

//       // redirect to OTP page
//       navigate("/verify-otp", { state: { email } });

//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Something went wrong");
//       console.log("Forgot Error:", error?.response?.data);
//     }
//   };

//   return (
//     <>
//       <div className="container d-flex justify-content-center align-items-center min-vh-100">
//         <div className="forgot-container">
//           <h2>Forgot Password</h2>

//           <form id="forgotForm" onSubmit={handleForgot}>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <button type="submit">Reset Password</button>
//           </form>

//           <a href="/login">Back to Login</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Forgot;



import React, { useState } from "react";
import axios from "axios";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  // Step 1: Send OTP
  const handleSendOtp = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/resend", { email });
      setMessage(response?.data?.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending OTP");
    }
  };

  // Step 2: Verify OTP + Reset Password
  const handleResetPassword = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/verify", {
        email,
        otp,
        newPassword,
      });
      setMessage(response?.data?.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Reset Password</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button onClick={handleSendOtp}>Send OTP</button>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
        />
      </div>

      <button onClick={handleResetPassword}>Reset Password</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Forgot;
