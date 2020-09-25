import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "richard", password: "Learning1" };
  }

  handleChange = (opcode) => (event) => {
    console.log(event.target.value);
    this.setState({ [opcode]: event.target.value });
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            name="username"
            value={this.state.username}
            onChange={this.handleChange("username")}
            // isInvalid={!!errors.dob}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            console.log("Send request to server");
            console.log(this.state);
            this.props.handleLogin(this.state);
          }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default Login;
