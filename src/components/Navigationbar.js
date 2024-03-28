import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import "../styles/navigation.css"; // Import custom style

const NavigationBar = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <Navbar bg="dark" variant="dark" expand="lg"   >
      <Container className='navcontainer'>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/dashboard">Weather Dashboard</Nav.Link>
              <Nav.Link href="/widget">Widgets </Nav.Link>
              <Nav.Link href="/user-profile">User Profile</Nav.Link>
              <Nav.Link href="/user-list">User List</Nav.Link>
    
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
