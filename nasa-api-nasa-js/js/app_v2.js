import { fetchApodData } from "./fetchApodData.js";
import { displayApod } from "./displayApod.js";

document.addEventListener("DOMContentLoaded", () => {
  const fetchApodButton = document.getElementById("fetch-apod");
  const apodContent = document.getElementById("apod-content");

  fetchApodButton.addEventListener("click", () => {
    const date = document.getElementById("date").value;
    const startDate = document.getElementById("start_date").value;
    const endDate = document.getElementById("end_date").value;
    const count = document.getElementById("count").value;
    const thumbs = document.getElementById("thumbs").checked;

    let params = {};
    if (date) params.date = date;
    if (startDate) params.start_date = startDate;
    if (endDate) params.end_date = endDate;
    if (count) params.count = count;
    if (thumbs) params.thumbs = true;

    fetchApodData(params)
      .then((data) => {
        apodContent.innerHTML = "";
        if (Array.isArray(data)) {
          data.forEach((item) => displayApod(item, apodContent));
        } else {
          displayApod(data, apodContent);
        }
      })
      .catch((error) => {
        apodContent.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
      });
  });
});
