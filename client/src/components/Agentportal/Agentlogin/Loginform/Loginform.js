import React, { useState } from "react";
// import { Link } from "react-router-dom";
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
        console.log("Login:", response);
        setLoginState(initialState);
        localStorage.setItem(`user`, JSON.stringify(response));
        props.getUser(response);
        props.history.push("/agentportal");
      })
      .catch((error) => {
        const { message } = error.response.data;
        setLoginErrorMsg(message);
      });
  };

  // Function to handle changes in the input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginState({ ...loginState, [name]: value });
  };

  return (
    <div className="container portal-container">
      <div className="login-form-container">
        <div className="agentlogin-form">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <h6>Email Address</h6>
              <Form.Control
                type="text"
                name="email"
                onChange={handleChange}
                value={setLoginState.email}
                placeholder="Your email address"
                required
              />
            </Form.Group>
            <Form.Group>
              <h6>Password</h6>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                value={setLoginState.password}
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
          {loginErrorMsg && (
            <span style={{ color: "red" }}>{loginErrorMsg}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loginform;
