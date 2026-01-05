import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");

const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/auth/login",
      { email, password }
    );

    console.log("LOGIN RESPONSE 👉", response.data);

    const token = response.data.token || response.data.data?.token;

    if (!token) {
      toast.error("Token not received");
      return;
    }

    localStorage.setItem("accesstoken", token);

    toast.success("Login successful");
    navigate("/");
  } catch (error) {
    console.log("error", error);
    toast.error(error?.response?.data?.message);
  }
};

 
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="login-container">
          <h2 className="text-center fw-bold">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3 text-end">
              <a href="forgot" className="text-decoration-none">
                Forgot password?
              </a>
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-success btn-lg">
                <i className="bi bi-box-arrow-in-right"></i> Login
              </button>
            </div>

            {/* {message && <p className="text-center">{message}</p>} */}

            <p className="text-center">
              Don't have an account?{" "}
              <a href="signup" className="text-success text-decoration-none">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
