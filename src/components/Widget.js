import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios"; // Import axios for making API requests
import "../styles/Dashboard.css"; // Import custom styles
import CalculatorWidget from "../widgets/CalculatorWidget"; // Import CalculatorWidget
import TaskApp from "../widgets/TaskApp";
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
      <>
        <div className="navbar">
          <NavigationBar />
        </div>

      </>
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <header class="text-center pb-5">
                <h1 class="h2">Calculate your things on few clicks</h1>
              </header>
            </div>
          </div>


          <div class="row">
            <div class="col-lg-6 mx-auto">
              <CalculatorWidget />

              <div className="widget task-widget my-5">
                <TaskApp />
              </div>

            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Dashboard;