import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark  bg-warning navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="text-black text-sm navbar-brand" to="/">
            Full Stack Web App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/add-user"  className="btn btn-outline-dark">
            Add User
            
          </Link>
          
        </div>
      </nav>
    </div>
  );
}
