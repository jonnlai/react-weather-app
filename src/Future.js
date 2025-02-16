import React from "react";
import "./Future.css";

export default function Future({ day, maxTemp, minTemp }) {
  return (
    <div className="col-2 Future">
      <div className="card">
        <h5 className="card-header">{day}</h5>
        <div className="card-body">
          <h5 className="card-title">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="weather icon"
              className="future-weather-icon"
            />
          </h5>
          <p className="card-text">
            {maxTemp}° | {minTemp}°
          </p>
        </div>
      </div>
    </div>
  );
}
