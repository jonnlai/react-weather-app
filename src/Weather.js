import React from "react";
import "./Weather.css";
import Future from "./Future";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: 7,
    description: "Light rain",
    icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
    humidity: 80,
    wind: 15,
  };
  return (
    <div className="Weather">
      <div className="row mb-4">
        <div className="col-6">
          <div className="weather-data">
            <h1>{weatherData.city}</h1>
          </div>
        </div>
        <div className="col-3">
          <img
            src={weatherData.icon}
            alt={weatherData.description}
            className="today-icon"
          />
          <div className="description">Light rain</div>
        </div>
        <div className="col-3">
          <div className="weather-data">
            <h1>
              <span>{weatherData.temperature}</span>
              <span className="temp-scale"> °C </span>
            </h1>
            <p>
              Humidity: <span>{weatherData.humidity}</span>% <br />
              Wind: <span>{weatherData.wind}</span> km/h
            </p>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <Future day="Tue" maxTemp={8} minTemp={3} />
        <Future day="Wed" maxTemp={5} minTemp={4} />
        <Future day="Thu" maxTemp={6} minTemp={2} />
        <Future day="Fri" maxTemp={9} minTemp={5} />
        <Future day="Sat" maxTemp={8} minTemp={4} />
        <Future day="Sun" maxTemp={7} minTemp={5} />
      </div>
    </div>
  );
}
