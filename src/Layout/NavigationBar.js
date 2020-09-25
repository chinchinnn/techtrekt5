import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">DBS</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/user">Add New Application</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-info">Logout</Button>
        </Form>
      </Navbar>
    );
  }
}

export default NavigationBar;
