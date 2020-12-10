import React from "react";
import "./Navbar.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent">
      <a className="navbar-brand" href="/">
        Fjord Adventures
      </a>
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
            <DropdownButton id="dropdown-basic-button" title="Login">
              <Form>
                <Form.Group>
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </DropdownButton>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
