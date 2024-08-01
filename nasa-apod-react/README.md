### `README.md`

````markdown
# NASA Astronomy Picture of the Day (APOD) React App

This React application allows you to fetch and display NASA's Astronomy Picture of the Day (APOD) based on user-defined parameters such as date, date range, count, and whether to include video thumbnails.

## Features

- Fetch APOD data for a specific date.
- Fetch APOD data for a range of dates.
- Fetch a random count of APOD entries.
- Include video thumbnails in the results.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/nasa-apod-react.git
cd nasa-apod-react
```
````

2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm start
```

The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your web browser.
2. Enter the desired parameters (date, start date, end date, count, thumbs).
3. Click the "Fetch APOD" button to fetch and display the results.

## File Structure

- `src/`
  - `components/`
    - `ApodForm.js`: Component for the form to input parameters.
    - `ApodContent.js`: Component to display the fetched APOD data.
  - `App.js`: Main application component.
  - `App.css`: Custom styles for the application.

## Dependencies

- React: A JavaScript library for building user interfaces.
- Bulma: A modern CSS framework based on Flexbox.
- Fetch API: Used to fetch data from the NASA APOD API.

````

### Instructions to Create the Project

1. **Create a new React project:**

```sh
npx create-react-app nasa-apod-react
cd nasa-apod-react
````

2. **Create the necessary components:**

- Create a `components` folder inside `src`.
- Add `ApodForm.js` and `ApodContent.js` files in the `components` folder.

3. **Update the `App.js` file with the provided code.**

4. **Add custom styles:**

- Create an `App.css` file in the `src` directory and add the provided CSS.

5. **Update the `index.html` file:**

- This is not necessary as Create React App already sets up the basic HTML structure.

6. **Run the application:**

```sh
npm start
```

Your React application should now be running and allow you to fetch and display NASA's Astronomy Picture of the Day based on user input.

## Note: to remove babel error (short term fix)

npm install @babel/plugin-proposal-private-property-in-object --save-dev
