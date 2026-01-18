import React from "react";
import '../App.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MYGYM</div>

      <ul className="navlinks">
        <li>Home</li>
        <li>About Us</li>
        <li className="login">Login</li>
        <li className="signup">Sign Up</li>
      </ul>
    </nav>
  );
};

export default Navbar;
