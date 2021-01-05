import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <img
        src="/images/fjordadventureslogo.png"
        alt="logo-img"
        className="navbar-logo navbar-brand"
      />
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
            <li className="nav-item">
              <a className="nav-link" href="/">
                Fjord Adventures
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#explore-section">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-section">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#activities-section">
                Activities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/agentlogin">
                Agent Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
