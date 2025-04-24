import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  return (
    <>
      <div className="login-wrapper">
        <form className="login-form">
          <div className="form-container">
            <h3 className="heading-login">Register From</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="inp-username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                className="inp-password"
                type="password"
                required
              />
            </div>
            <div className="login-btn-div">
              <button className="login-btn" type="submit">
                Register
              </button>
            </div>
            
          </div>
        </form>
      </div>
    </>
  )
}
