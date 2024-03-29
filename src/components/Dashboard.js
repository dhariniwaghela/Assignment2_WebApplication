import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios"; // Import axios for making API requests
import "../styles/Dashboard.css"; // Import custom style
import "../styles/QuoteApp.css"; // Import custom style


import NavigationBar from "./Navigationbar";

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
      <div className="navbar">
        <NavigationBar />
      </div>
      <div>
        <section class="py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mx-auto">
                <header class="text-center pb-5">
                  <h1 class="h2">Daily Weather in your city</h1>
                  <p>Keep updated with live weather data</p>
                </header>
              </div>
            </div>


            <div class="row">
              <div class="col-lg-6 mx-auto">
                <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                  <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
                  {/* <p class="mb-0 mt-2 font-italic">"{quote}"</p> */}
                  {weatherData && (
                    <div className="weather-info">
                      <h2 className="weather-city">Weather in {weatherData.name}</h2>
                      <p className="weather-temp">Temperature: {weatherData.main.temp}°C</p>
                      <p className="weather-description">Description: {weatherData.weather[0].description}</p>
                    </div>
                  )}

                </blockquote>

              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Dashboard;