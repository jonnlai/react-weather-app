import React from "react";
import "./Update.css";

export default function Update(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = props.date.getDay();

  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = props.date.getMonth();

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div className="Update">
      Last updated: {days[day]} {date} {months[month]} {hours}:{minutes}
    </div>
  );
}
