import React, { useState } from "react";
import ApodForm from "./components/ApodForm";
import ApodContent from "./components/ApodContent";
import "./App.css";

const App = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");

  const fetchApodData = async (parameters) => {
    const apiKey = "GurS0wJyr12na3jhvOraArdY3br64N2ovBUUTh5";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    // Activity 4 - Step 2 Reset the state before every api call
    // setApodData(null);
    // setError("");

    for (const key in parameters) {
      apiUrl += `&${key}=${parameters[key]}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // Activity 4 - Step 1 log out the api response when you change the api key
      // Note how the error isnt captured
      // Look at the object
      // debugger;
      // console.log(` Data object ${Object.keys(data)}, Data code ${data.code}`);
      setError("");
      // Once done use the nested ternary below
      // However note the error state remians from the previous call
      // data.code != undefined
      //   ? setError(data.msg)
      //   : setApodData(Array.isArray(data) ? data : [data]);
    } catch (err) {
      console.log(` Catch ${data[0]}`);
      setError(`Error fetching data: ${err.message}`);
    }
  };

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
