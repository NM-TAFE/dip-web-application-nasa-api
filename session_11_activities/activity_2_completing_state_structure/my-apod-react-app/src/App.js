import React, { useState } from "react";
import ApodForm from "./components/ApodForm";
import ApodContent from "./components/ApodContent";
import "./App.css";

const App = () => {
  // Activity 2
  // complete the submitting and error handling states
  // mention the api url which we need to construct
  // build a try catch using a promise (await)
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");

  const fetchApodData = async () => {
    const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    // Activity 2 - note move this outside the function
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApodData(data);
      // setApodData(Array.isArray(data) ? data : [data]);
    } catch (err) {
      setError(`Error fetching data: ${err.message}`);
    }
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
