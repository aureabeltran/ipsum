import React,  { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/images/logo.png';
import {NAV_TEXT_en} from '../partials/text';

class Header extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){
      console.log(NAV_TEXT_en)
    }

    render() {
      return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img src={Logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">{NAV_TEXT_en.menu_1 }</Nav.Link>
                <Nav.Link href="#link">{NAV_TEXT_en.menu_2}</Nav.Link>
                <Nav.Link href="#home">{NAV_TEXT_en.menu_3}</Nav.Link>
                <Nav.Link href="#link">{NAV_TEXT_en.menu_4}</Nav.Link>
                <Nav.Link href="#home">{NAV_TEXT_en.menu_3}</Nav.Link>
                <Nav.Link href="#link">{NAV_TEXT_en.menu_4}</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">ES</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }
  }
export default Header;
