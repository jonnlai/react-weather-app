import React, { useState } from "react";
import axios from "axios";
import "./Future.css";

export default function Future(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  function displayDay() {
    let date = new Date(forecast[1].time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (ready) {
    return (
      <div className="col-6 col-md-2 mt-3 Future">
        <div className="card">
          <h5 className="card-header">{displayDay()}</h5>
          <div className="card-body">
            <h5 className="card-title">
              <img
                src={forecast[1].condition.icon_url}
                alt={forecast[1].condition.description}
                className="future-weather-icon"
              />
            </h5>
            <p className="card-text">
              {Math.round(forecast[1].temperature.maximum)}° |{" "}
              {Math.round(forecast[1].temperature.minimum)}°
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "15353af8tb5a96838601b6762eoe80e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
