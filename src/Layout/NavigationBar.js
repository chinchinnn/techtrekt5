import React, {Component} from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export class NavigationBar extends Component {

    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">DBS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">New Application</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/">Action</NavDropdown.Item>
                        <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar>
            )
    }
}

export default NavigationBar;

