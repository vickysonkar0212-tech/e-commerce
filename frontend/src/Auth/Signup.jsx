import React, { useState } from "react";
import { toast } from "react-hot-toast";

// import axios from "axios"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
const navigate = useNavigate()
    const handleSubmit = async (e) => {
    e.preventDefault()

    try {
   const response = await axios.post("http://127.0.0.1:5000/auth/register", { name,email, password })
      console.log(response)
      toast.success(response?.data?.message)
      // localStorage.setItem("accesstoken", response.data.token)
    //   localStorage.setItem("accesstoken", response?.data?.token);
      console.log("res",response)
      navigate("/")
    } catch (error) {
      console.log("error", error.response.data.message)
      toast.error(error?.response?.message)
    }
  }
      

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form id="signupForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              placeholder="Username"
              required
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>
          {/* {message && <p>{message}</p>} */}
          <a href="/login">Already have an account? Login</a>
        </div>
      </div>
    </>
  );
};

export default Signup;
