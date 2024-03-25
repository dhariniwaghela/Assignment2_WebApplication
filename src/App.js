import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Dashboard from "./components/Dashboard"; // Import Dashboard component
import UserProfileWidget from "./components/UserProfileWidget"; // Import UserProfileWidget component
import UserListWidget from "./components/UserListWidget"; // Import UserListWidget component

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                  
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user-profile" element={<UserProfileWidget />} />
              <Route path="/user-list" element={<UserListWidget />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
