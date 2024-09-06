// src/components/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = ({ setAuth }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://sec-project3-backend-deploy.onrender.com/api/auth/login",
        formData
      );
      localStorage.setItem("token", res.data.token);
      setAuth(true);

      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (err) {
      console.error("Error logging in:", err);
      alert("Error logging in.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        <p>
          please register to login! <a href="/register">click here!</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
