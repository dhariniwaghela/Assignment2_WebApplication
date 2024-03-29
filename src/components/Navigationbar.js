import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import "../styles/navigation.css"; // Import custom style

// Define the NavigationBar component
const NavigationBar = () => {
    // Extract the logOut function and user information from the UserAuthContext
    const { logOut, user } = useUserAuth();
    // Initialize navigation functionality
    const navigate = useNavigate();
  
    // Function to handle user logout
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };

  // Render the navigation bar with links and logout button
  return (
    <Navbar className='px-4 py-2' bg="dark" variant="dark" expand="lg">
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
    </Navbar>
    

    
  );
}

// Export the NavigationBar component as default
export default NavigationBar;
