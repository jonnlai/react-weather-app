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

  function displayDay(data) {
    let date = new Date(data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (ready) {
    return (
      <div class="row text-center Future">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div className="col-6 col-md-2 mt-3" key={index}>
                <div className="card">
                  <h5 className="card-header">{displayDay(dailyForecast)}</h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      <img
                        src={dailyForecast.condition.icon_url}
                        alt={dailyForecast.condition.description}
                        className="future-weather-icon"
                      />
                    </h5>
                    <p className="card-text">
                      {Math.round(dailyForecast.temperature.maximum)}° |{" "}
                      {Math.round(dailyForecast.temperature.minimum)}°
                    </p>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  } else {
    const apiKey = "15353af8tb5a96838601b6762eoe80e4";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
