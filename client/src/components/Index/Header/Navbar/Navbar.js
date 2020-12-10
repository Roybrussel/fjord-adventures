import React, { useState } from "react";
import "./Navbar.css";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

import AuthService from "../../../../services/auth-service";

const initialState = { email: "", password: "" };

const Navbar = (props) => {
  const [loginState, setLoginState] = useState(initialState);
  const [loginErrorMsg, setLoginErrorMsg] = useState("");

  const service = new AuthService();

  // Function to handle form submit in the input fields
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { email, password } = loginState;

    service
      .login(email, password)
      .then((response) => {
        setLoginState(initialState);
        props.history.push("/agentportal");
      })
      .catch((error) => {
        const { message } = error.response.data;
        setLoginErrorMsg(message);
        console.log(error);
      });
  };

  // Function to handle changes in the input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginState({ ...loginState, [name]: value });
  };

  return (
    <nav className="navbar navbar-expand-lg">
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
            {/* <DropdownButton id="dropdown-basic-button" title="Agent Login">
              <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
                {loginErrorMsg && (
                  <span style={{ color: "red" }}>{loginErrorMsg}</span>
                )}
              </Form>
            </DropdownButton> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
