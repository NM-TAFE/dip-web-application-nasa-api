import React, { useState } from "react";

import ApodForm from "./components/ApodForm";
import ApodContent from "./components/ApodContent";
import "./App.css";

const App = () => {
  const fetchApodData = async () => {
    const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  };

  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <ApodForm />
          <ApodContent />
        </div>
      </section>
    </div>
  );
};

export default App;
