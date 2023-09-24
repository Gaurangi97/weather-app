import React, { useState, useEffect  } from "react";
import WeatherCard from "../components/WeatherCard";
import WeatherListCard from "../components/WeatherListCard";
import NavBar from "./NavBar";

export default function HomePage() {
   

 
  const apiKey = "61f936a42a7f35e778dccbd6f78a8725";
  const [colomboWeather, setColomboWeather] = useState(null);
  const [firstLoaded, setfirstLoaded] = useState(false);

  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [resultCount, setresultCount] = useState(3);
  const loggedIn = localStorage.getItem('loggedIn');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setresultCount(3);
    const url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      longitude +
      "&lon=" +
      latitude +
      "&exclude=hourly,minutely&appid=" + apiKey;
    const options = {
      method: "GET",
      headers: {},
    };

    try {
      const response = await fetch(url, options);
      const jdata = await response.json();
      setSearchResult(jdata);
    } catch (error) {
      alert("Error fetching data from the API.");
      console.error(error);
    }
  };
  
  useEffect(async () => {
    
    if (firstLoaded === false) {
      setfirstLoaded(true);
      const url =
        "https://api.openweathermap.org/data/2.5/weather?lat=6.9271&lon=79.8612&appid=" + apiKey;
      const options = {
        method: "GET",
        headers: {},
      };

      try {
        const response = await fetch(url, options);
        const jdata = await response.json();
        setColomboWeather(jdata);
      } catch (error) {
        alert("Error fetching data from the API.");
        console.error(error);
      }
    }
  }, []);

  const handleSeeMore = async () => {
    setresultCount(7);
  };

  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-4">
              {colomboWeather && (
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title text-info">Colombo</h4>
                    <WeatherCard key="colombo" weather={colomboWeather} />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-8">
            <div className="mb-4">
              <h1>Search Longitude and Latitude</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="longitude" className="form-label">
                    Longitude:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="longitude"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="latitude" className="form-label">
                    Latitude:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="latitude"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-info">
                  Search
                </button>
              </form>
            </div>
            {searchResult && (
              <div>
                <div className="card">
                  <div
                    className="card-body d-flex flex-nowrap"
                    style={{
                      overflowX: "auto",
                    }}
                  >
                    {searchResult.daily
                      .slice(0, resultCount)
                      .map((data, index) => (
                        <div key={index} className="col">
                          <WeatherListCard weather={data} />
                        </div>
                      ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-info mt-2"
                  onClick={handleSeeMore}
                >
                  See more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

