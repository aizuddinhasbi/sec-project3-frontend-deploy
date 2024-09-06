// src/components/NavBar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import App from "../App.jsx";
import "../styles/NavBar.css";

function NavBar({ isAuth, setAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        {!isAuth ? (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
