import React from "react";

export default function WeatherListCard(props) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="card  border-info mb-3" style={{ width: '230px',  margin: '10px' }}>
  <div className="card-body">
  <div className="card-header bg-info text-white" style={{ height: '60px'}}>{formatDate(props.weather.dt)}</div>
    <ul className="list-unstyled">
      <li className="mb-2 border-bottom border-lightblue"><strong>Teperature:</strong></li>
      <ul className="ml-4">
        <li>Day: {props.weather.temp.day} K</li>
        <li>Min: {props.weather.temp.min} K</li>
        <li>Max: {props.weather.temp.max} K</li>
        <li>Night: {props.weather.temp.night} K</li>
        <li>Evening: {props.weather.temp.eve} K</li>
        <li>Morning: {props.weather.temp.morn} K</li>
      </ul>
      <li className="mb-2 border-bottom border-lightblue"><strong>Feels Like:</strong></li>
      <ul className="ml-4">
        <li>Day: {props.weather.feels_like.day} K</li>
        <li>Night: {props.weather.feels_like.night} K</li>
        <li>Evening: {props.weather.feels_like.eve} K</li>
        <li>Morning: {props.weather.feels_like.morn} K</li>
      </ul>
      <li className="mb-2 border-bottom border-lightblue"><strong>Description:</strong> {props.weather.weather[0].description}</li>
      <li className="mb-2 border-bottom border-lightblue"><strong>Humidity:</strong> {props.weather.humidity}%</li>
      <li className="mb-2 border-bottom border-lightblue"><strong>Dew Point:</strong> {props.weather.dew_point} K</li>
      <li className="mb-2 border-bottom border-lightblue"><strong>Pressure:</strong> {props.weather.pressure} hPa</li>
      <li className="mb-2 border-bottom border-lightblue"><strong>Wind:</strong></li>
      <ul className="ml-4">
        <li>Speed: {props.weather.wind_speed} m/s</li>
        <li>Degree: {props.weather.wind_deg}°</li>
        <li>Gust: {props.weather.wind_gust} m/s</li>
      </ul>
      <li className="mb-2 border-bottom border-lightblue"><strong>Clouds:</strong> {props.weather.clouds}%</li>
      <li className="mb-2"><strong>UV Index:</strong> {props.weather.uvi}</li>
    </ul>
  </div>
</div>

  
  );
}
