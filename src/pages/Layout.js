import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Outlet, Link }from 'react-router-dom';


const Layout = ()=> {
    return (
        <>
        <Navbar   style={{ color: 'green',backgroundColor: '#f5faf5' }}>
        <Container>
          <Navbar.Brand href="/home">OnlinePost</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/ticket">Ticket</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
    
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
      </>
    
    )
  }
  
  export default Layout;