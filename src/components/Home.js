import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Dashboard from "./Dashboard";
import UserProfileWidget from "./UserProfileWidget";
import UserListWidget from "./UserListWidget";

const Home = () => {
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
            <Nav>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Home;
