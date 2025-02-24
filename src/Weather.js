import React from "react";
import "./Weather.css";
import Future from "./Future";
import Update from "./Update";
import Temperature from "./Temperature";

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
            <Temperature celsius={props.data.temperature} />
            <p>
              Humidity: <span>{props.data.humidity}</span>% <br />
              Wind: <span>{props.data.wind}</span> km/h
            </p>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <Future city={props.data.city} />
      </div>
      <div>
        <Update date={props.data.date} />
      </div>
    </div>
  );
}
