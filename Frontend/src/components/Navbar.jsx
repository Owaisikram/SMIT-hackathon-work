import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container1">
        <div className="brand">Qarz e Hasana</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Signup" className="nav-link">Signup</Link>
          <Link to="/Login" className="nav-link">Login</Link>
          <Link to="/About" className="nav-link">About</Link>
          <Link to="/Contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
