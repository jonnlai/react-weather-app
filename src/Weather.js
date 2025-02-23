import React from "react";
import "./Weather.css";
import Future from "./Future";
import Update from "./Update";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row mb-4">
        <div className="col-12 col-md-6 text-center">
          <div className="weather-data">
            <h1>{props.data.city}</h1>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="today-icon text-center"
          />
          <div className="description text-center">
            {props.data.description}
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="weather-data text-center">
            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="temp-scale"> °C </span>
            </div>
            <p>
              Humidity: <span>{props.data.humidity}</span>% <br />
              Wind: <span>{props.data.wind}</span> km/h
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
        <Update date={props.data.date} />
      </div>
    </div>
  );
}
