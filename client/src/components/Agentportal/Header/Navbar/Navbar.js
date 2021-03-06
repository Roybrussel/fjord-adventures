import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent agent-navbar">
      <Link to="/agentportal" className="navbar-brand agent-navbar-brand">
        Fjord Adventures Agent Portal
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <ul className="navbar-nav">
            <li className="nav-item agent-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item agent-item">
              <Link to="/agentactivities" className="nav-link">
                Activities
              </Link>
            </li>
            <li className="nav-item agent-item">
              <Link to="/add-agent" className="nav-link">
                Add Agent
              </Link>
            </li>
            <li className="nav-item agent-item">
              <Link to="/" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
