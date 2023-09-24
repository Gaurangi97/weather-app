import React from "react";

export default function WeatherCard(props) {
  return (
    <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header bg-info text-white">Weather Details</div>
      <div className="card-body">
        <div className="card-text">
          <p className="font-weight-bold mb-0">Temperature:</p>
          <p>{props.weather.main.temp} K</p>
        </div>
        <div className="card-text">
          <p className="font-weight-bold mb-0">Feels Like:</p>
          <p>{props.weather.main.feels_like} K</p>
        </div>
        <div className="card-text">
          <p className="font-weight-bold mb-0">Humidity:</p>
          <p>{props.weather.main.humidity}%</p>
        </div>
        <div className="card-text">
          <p className="font-weight-bold mb-0">Weather:</p>
          <p>{props.weather.weather[0].description}</p>
        </div>
        <div className="card-text">
          <p className="font-weight-bold mb-0">Country:</p>
          <p>{props.weather.sys.country}</p>
        </div>
        <div className="card-text">
          <p className="font-weight-bold mb-0">Wind Speed:</p>
          <p>{props.weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
