import React, { useState } from "react";

// Activity 1: change the input top use state
// Remove the ids - we dont need them
// Change the class to className
// Destructure the state for each input
// Capture and handle the submission event

// Apod data props
const ApodForm = () => {
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [count, setCount] = useState("");
  const [thumbs, setThumbs] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {};
    if (date) params.date = date;
    if (startDate) params.start_date = startDate;
    if (endDate) params.end_date = endDate;
    if (count) params.count = count;
    if (thumbs) params.thumbs = true;
    // Shared apod data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Date (YYYY-MM-DD)</label>
        <div className="control">
          <input
            className="input"
            type="date"
            value={date}
            onChange={(event) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Start Date (YYYY-MM-DD)</label>
        <div className="control">
          <input
            className="input"
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">End Date (YYYY-MM-DD)</label>
        <div className="control">
          <input
            className="input"
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Count</label>
        <div className="control">
          <input
            className="input"
            type="number"
            min="1"
            value={count}
            onChange={(event) => setCount(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Include Video Thumbnails</label>
        <div className="control">
          <input
            className="checkbox"
            type="checkbox"
            checked={thumbs}
            onChange={(event) => setThumbs(e.target.checked)}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-link" type="submit">
            Fetch APOD
          </button>
        </div>
      </div>
    </form>
  );
};
export default ApodForm;
