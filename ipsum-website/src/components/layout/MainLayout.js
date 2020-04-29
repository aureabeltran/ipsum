
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../layout/Footer.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/images/logo.png';
import {NAV_TEXT_en} from '../partials/text';

export default class MainLayout extends Component {
    constructor(props) {
        super(props)
        this.state={
            lenguage: 'EN'
        }
    };
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            loader: true
        })
        
    }

    render() {
        //const children = (this.props.children);
        const childrenWithExtraProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                data: this.state
            });
        });

        let MainLayout =
            <div>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                    <img src={Logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="#home">{NAV_TEXT_en.menu_1}</Nav.Link>
                        <Nav.Link href="#link">{NAV_TEXT_en.menu_2}</Nav.Link>
                        <Nav.Link href="#home">{NAV_TEXT_en.menu_3}</Nav.Link>
                        <Nav.Link href="#link">{NAV_TEXT_en.menu_4}</Nav.Link>
                        <Nav.Link href="#home">{NAV_TEXT_en.menu_3}</Nav.Link>
                        <Nav.Link href="#link">{NAV_TEXT_en.menu_4}</Nav.Link>
                        <Nav.Link href="#link">{NAV_TEXT_en.menu_5}</Nav.Link>
                        <Nav.Link href="#link">{NAV_TEXT_en.menu_6}</Nav.Link>
                        <Nav.Link href="#link" className="main-btn orange-btn"><span>{NAV_TEXT_en.menu_7}</span></Nav.Link>
                        <NavDropdown title={this.state.lenguage} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ES</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                    {childrenWithExtraProp}
                <Footer />
            </div>
        return MainLayout
    }
}