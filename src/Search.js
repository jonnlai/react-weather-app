import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="row search-engine">
        <div className="col-3"></div>
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your city"
            autoComplete="off"
            autoFocus="on"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-dark mb-2 mx-3 py-2 px-3">
            Search
          </button>
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-dark btn-lg mb-2 mx-3 py-1 px-4 current-city-button"
          >
            Current City
          </button>
        </div>
      </form>
    </div>
  );
}
