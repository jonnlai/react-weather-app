import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Weather from "./Weather";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "15353af8tb5a96838601b6762eoe80e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "15353af8tb5a96838601b6762eoe80e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(updateLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form className="row search-engine" onSubmit={handleSubmit}>
          <div className="col-0 col-md-3"></div>
          <div className="col-12 col-md-5 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your city"
              autoComplete="off"
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-6 col-md-2 d-flex justify-content-center">
            <button type="submit" className="btn btn-dark mb-2 mx-3 py-2 px-3">
              Search
            </button>
          </div>
          <div className="col-6 col-md-2 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-dark btn-lg mb-2 mx-3 py-1 px-4 current-city-button"
              onClick={getLocation}
            >
              Current City
            </button>
          </div>
        </form>
        <Weather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
