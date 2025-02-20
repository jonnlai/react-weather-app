import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Future from "./Future";
import Update from "./Update";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.daily[0].temperature.day,
      description: response.data.daily[0].condition.description,
      icon: response.data.daily[0].condition.icon_url,
      humidity: response.data.daily[0].temperature.humidity,
      wind: response.data.daily[0].wind.speed,
      date: new Date(response.data.daily[0].time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row mb-4">
          <div className="col-12 col-md-6 text-center">
            <div className="weather-data">
              <h1>{weatherData.city}</h1>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="today-icon text-center"
            />
            <div className="description text-center">Light rain</div>
          </div>
          <div className="col-6 col-md-3">
            <div className="weather-data text-center">
              <div>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="temp-scale"> °C </span>
              </div>
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
        <div>
          <Update date={weatherData.date} />
        </div>
      </div>
    );
  } else {
    const apiKey = "15353af8tb5a96838601b6762eoe80e4";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
