import React from "react";
import "./index.css";

export default function Navbar({ setModal }) {
  let modalShow = () => {
    setModal(true);
  };
  return (
    <nav className="navContainer">
      <div className="container">
        <h1>logo</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li onClick={modalShow}>Sign In</li>
        </ul>
      </div>
    </nav>
  );
}
