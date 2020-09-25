import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loginStatus } = this.props;
    console.log(loginStatus);
    const displayLogic = loginStatus ? (
      <>
        <Nav className="mr-auto">
          <Nav.Link>Add New Application</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-info">Logout</Button>
        </Form>
      </>
    ) : (
      <>
        <Nav className="mr-auto">
          <Nav.Link>Login</Nav.Link>
        </Nav>
      </>
    );

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">DBS</Navbar.Brand>
        {displayLogic}
      </Navbar>
    );
  }
}

export default NavigationBar;
