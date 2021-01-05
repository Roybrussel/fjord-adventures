import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../../services/auth-service";
import "./Loginform.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialState = { email: "", password: "" };

const Loginform = (props) => {
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
        props.getUser(response);
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
    <div className="container portal-container">
      <div className="form-container">
        <div className="agentlogin-form">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <h6>Email Address</h6>
              <Form.Control
                type="text"
                name="email"
                value={loginState.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </Form.Group>
            <Form.Group>
              <h6>Password</h6>
              <Form.Control
                type="password"
                name="password"
                value={loginState.password}
                onChange={handleChange}
                placeholder="Your password"
                required
              />
            </Form.Group>
            <Button
              variant="custom-login"
              type="submit"
              value="Login"
              closeButton
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
