import React, { useState } from "react";

import ApodForm from "./components/ApodForm";
import ApodContent from "./components/ApodContent";
import "./App.css";


const App = () => {
  // Activity 3
  // Review the 2 shared state examples tehn make tyhe following changes
  // Show how `fetchApodData` is defined in `App.js` and passed to `ApodForm` as a prop.
  // Explain that the fetched data (`apodData`) is passed down to `ApodContent`.
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");

  const fetchApodData = async (parameters) => {
    const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    // Activity 3: set the parameters
    for (const key in parameters) {
      apiUrl += `&${key}=${parameters[key]}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApodData(data);
    } catch (err) {
      setError(`Error fetching data: ${err.message}`);
    }
  };

  // Step 3 Render our html with our two components
  // Activity 3 add the fetch function as prop
  // so we can lift up the paramaters state also pass down the retrieved data
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <ApodForm fetchApodData={fetchApodData} />
          <ApodContent apodData={apodData} />
        </div>
      </section>
    </div>
  );
};

export default App;
