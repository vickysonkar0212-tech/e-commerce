import Navbar from "../components/Navbar";
import Footer from "../layout/Footer";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Applayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accesstoken");

  console.log("token",token)
    // 🔓 Public routes
    const publicRoutes = [
      "/",
      "/contact",
      "/about",
      "/shop",
      "/offer",
      "/blog",
      "/shipping",
      "/tracking",
      "/returnpolicy",
      "/support",
      "/faq",
    ];

    // ❌ Token nahi hai & route private hai
    if (!token && !publicRoutes.includes(location.pathname)) {
      navigate("/login");
      return;
    }

    // ✅ Token hai → user fetch karo
    if (token) {
      getUser(token);
    }
  }, [location.pathname]);

  const getUser = async (token) => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/user/get", {
        headers: {
          Authorization: token,
        },
      });
      setUser(response.data.data);
    } catch (error) {
      console.log("User fetch error", error);
    }
  };

  return (
    <>
      <Navbar user={user} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Applayout;
