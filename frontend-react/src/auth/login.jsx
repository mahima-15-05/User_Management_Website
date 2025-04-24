import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add Axios login call here
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username,
        password,
      });

      if (response.status === 200) {
        alert("Logged in successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
    console.log("Username:", username, "Password:", password);
  };

  return (
    <>
      <div className="login-wrapper">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-container">
            <h3 className="heading-login">Login form</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="inp-username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                className="inp-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="login-btn-div">
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
            <div className="acc-register">
              <p className="reg-para">
                Do not have an account?{" "}
                <span>
                  <Link className="link-reg" to="/register">Register</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
