import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="logo">My logo</div>
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-item-link" href="#">Item1</a>
          </li>
          <li className="nav-item">
            <a className="nav-item-link" href="#">Item2</a>
          </li>
          <li className="nav-item">
            <a className="nav-item-link" href="#">Item3</a>
          </li>
          <li className="nav-item">
            <a className="nav-item-link" href="#">Item4</a>
          </li>
        </ul>
        <a href="#" className="sign-btn">
      <button>Sign Up</button>
    </a>
      </header>
    </>
  );
}
