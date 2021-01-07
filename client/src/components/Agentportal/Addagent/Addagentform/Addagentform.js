import React, { useState } from "react";
import AuthService from "../../../../services/auth-service";
import "./Addagentform.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialState = { firstName: "", lastName: "", email: "", password: "" };

const Addagentform = (props) => {
  const [regForm, setRegForm] = useState(initialState);

  const service = new AuthService();

  // Form submission handler
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, email, password } = regForm;

    // Use the service.signup method to make a call to the back end and sign the user up
    service
      .signup(firstName, lastName, email, password)
      .then((response) => {
        setRegForm(initialState);
        props.getUser(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Change handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegForm({ ...regForm, [name]: value });
  };

  return (
    <div className="form-container">
      <div className="add-agent-form">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <h6>First Name</h6>
            <Form.Control
              type="text"
              name="firstName"
              value={regForm.firstName}
              onChange={handleChange}
              placeholder="First name of travel agent"
              maxlength="25"
              required
            />
          </Form.Group>
          <Form.Group>
            <h6>Last Name</h6>
            <Form.Control
              type="text"
              name="lastName"
              value={regForm.lastName}
              onChange={handleChange}
              placeholder="Last name of travel agent"
              maxlength="25"
              required
            />
          </Form.Group>
          <Form.Group>
            <h6>Email Address</h6>
            <Form.Control
              type="text"
              name="email"
              value={regForm.email}
              onChange={handleChange}
              placeholder="Email address of travel agent"
              required
            />
          </Form.Group>
          <Form.Group>
            <h6>Password</h6>
            <Form.Control
              type="password"
              name="password"
              value={regForm.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </Form.Group>
          <Button variant="custom-add-agent" type="submit" closeButton>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Addagentform;
