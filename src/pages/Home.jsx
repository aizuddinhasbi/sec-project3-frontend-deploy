// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Personal Task Manager</h1>
      <p className="home-description">
        Organize your tasks efficiently and boost your productivity.
      </p>

      <div className="media">
        {/* YouTube Video */}
        <p>
          <iframe
            className="youtube-video"
            width="550"
            height="280"
            src="https://www.youtube.com/embed/tT89OZ7TNwc?si=CRlYKNVX7h9Lced6"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </p>

        <div className="instructions">
          <h2>How to Use the App:</h2>
          <ul>
            <li>Register an account or log in if you already have one.</li>
            <li>Create tasks by navigating to the dashboard.</li>
            <li>Set task priorities and categorize them for easy tracking.</li>
            <li>
              Edit, update, or delete tasks as you progress through your day.
            </li>
            <li></li>
          </ul>
        </div>

        <div className="home-buttons">
          <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
