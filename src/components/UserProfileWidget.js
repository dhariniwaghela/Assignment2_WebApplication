import React from 'react';
import { useUserAuth } from "../context/UserAuthContext"; // Import the useUserAuth hook
import { Navbar, Nav, Container } from "react-bootstrap";


const UserProfileWidget = () => {
  const { user } = useUserAuth(); // Access user object from the context

  return (
    <div>
        <>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/user-profile">User Profile</Nav.Link>
              <Nav.Link href="/user-list">User List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
        </>
      <h3>User Profile Information</h3>
      {user && (
        <div>
          <p>Name: {user.displayName}</p> {/* Assuming displayName is available */}
          <p>Email: {user.email}</p>
          {/* Add other user profile information here */}
        </div>
      )}
    </div>
  );
}

export default UserProfileWidget;
