import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Outlet, Link }from 'react-router-dom';


const Layout = ()=> {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">myApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/ticket">Ticket</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
    
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
      </>
    
    )
  }
  
  export default Layout;