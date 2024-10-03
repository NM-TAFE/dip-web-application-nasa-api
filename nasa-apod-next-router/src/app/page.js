"use client";

import { useState } from "react";
import ApodForm from "./components/ApodForm";
import ApodContent from "./components/ApodContent";
import "bulma/css/bulma.min.css";
import "./globals.css";

const Home = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");

  const fetchApodData = async (params) => {
    const apiKey = "{your_api_key}";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    for (const key in params) {
      apiUrl += `&${key}=${params[key]}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApodData(Array.isArray(data) ? data : [data]);
      setError("");
    } catch (err) {
      setError(`Error fetching data: ${err.message}`);
    }
  };

  // ----- Cloud flare object service worker -----
  //  const fetchApodData = async (params) => {
  //   let apiUrl = new URL(`https://dawn-fog-fdf7.robbozinoz.workers.dev/`);

  //   for (const key in params) {
  //     apiUrl.searchParams.append(key, params[key]);
  //   }

  //   try {
  //     const response = await fetch(apiUrl.toString());
  //     const data = await response.json();
  //     setApodData(Array.isArray(data) ? data : [data]);
  //     setError("");
  //   } catch (err) {
  //     setError(`Error fetching data: ${err.message}`);
  //   }
  // };

  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">NASA Astronomy Picture of the Day</h1>
          <ApodForm fetchApodData={fetchApodData} />
          {error && <p className="has-text-danger">{error}</p>}
          <ApodContent apodData={apodData} />
        </div>
      </section>
    </div>
  );
};

export default Home;
