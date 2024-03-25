import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios"; // Import axios for making API requests
import "../styles/Dashboard.css"; // Import custom styles
import CalculatorWidget from "../widgets/CalculatorWidget"; // Import CalculatorWidget

const Dashboard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = "327027ac9428fcb3ce8fccf1aa7929ea"; // Replace "YOUR_API_KEY" with your actual API key
  
    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=Barrie&appid=${apiKey}&units=metric`
          );
          setWeatherData(response.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
  
      fetchWeatherData();
    }, [apiKey]); // Ensure apiKey is included in the dependency array
  
    return (
        
      <div className="dashboard">
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
        <h1 className="dashboard-title">Dashboard Page</h1>
        <div className="widgets-container">
          <div className="widget weather-widget">
            {weatherData && (
              <div className="weather-info">
                <h2 className="weather-city">Weather in {weatherData.name}</h2>
                <p className="weather-temp">Temperature: {weatherData.main.temp}°C</p>
                <p className="weather-description">Description: {weatherData.weather[0].description}</p>
              </div>
            )}
          </div>
          <div className="widget calculator-widget">
            <CalculatorWidget />
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;