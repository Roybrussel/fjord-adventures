import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent agent-navbar">
      <div className="navbar-nav">
        <ul className="navbar-nav">
          <li className="nav-item agent-item">
            <Link to="/" className="nav-link">
              <i class="fas fa-arrow-left"></i>
              Back
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
