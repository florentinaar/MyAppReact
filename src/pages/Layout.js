import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {Outlet, Link }from 'react-router-dom';


const Layout = ()=> {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">OnlinePost</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
                <Nav.Link href="/orders2">Orders</Nav.Link>
            <Nav.Link href="/ticket">Ticket</Nav.Link>
            <Nav.Link href="/contactus">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link href="/login">Login</Nav.Link> */}
            <Nav.Link href="/services">Services</Nav.Link>
    
          </Nav>
        </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Layout;