**Activity 1: Converting form fields to use state**

1. **Step 1**: In `ApodForm.js`, identify the form fields (`date`, `startDate`, etc.).
2. **Step 2**: Replace hardcoded or static values with `useState` hooks.

**Code Snippet:**

```js
const [date, setDate] = useState("");
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [count, setCount] = useState("");
const [thumbs, setThumbs] = useState(false);
```

3. **Step 3**: Show how the form fields use the `useState` values and `set` functions to update their state.
4. **Step 4**: Explain how the state updates trigger UI changes.

**Code Snippet:**

```js
<input
  className="input"
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>
```

---

### **Topic 2: How to Structure State Well**

**Teaching Notes:**

- Discuss organizing the state into individual, manageable pieces.
- Emphasize keeping state localized and minimal.

**Activity 2: Review the state structure in `App.js` and `ApodForm.js`**

1. **Step 1**: Examine the `useState` for `apodData` and `error` in `App.js`.
2. **Step 2**: Ask students to discuss the current state structure in small groups.
3. **Step 3**: Explore how each state variable handles a specific UI concern (input values, API data, error handling).

**Code Snippet:**

```js
const [apodData, setApodData] = useState(null);
const [error, setError] = useState("");
```

4. **Step 4**: Explain how structuring state this way makes it easier to debug and manage.

---

### **Topic 3: How to “Lift State Up” to Share it Between Components**

**Teaching Notes:**

- Describe the concept of lifting state up and why it's necessary for component sharing.
- State is lifted to the closest common ancestor when two components need to access it.

**Activity 3: Lift state up in `ApodForm` and `ApodContent`**

1. **Step 1**: Show how `fetchApodData` is defined in `App.js` and passed to `ApodForm` as a prop.
2. **Step 2**: Explain that the fetched data (`apodData`) is passed down to `ApodContent`.

```
graph TD
    A[App Component] -->|fetchApodData function| B[ApodForm Component]
    A[App Component] -->|apodData and error state| C[ApodContent Component]
    B[ApodForm Component] -->|Form Input Values| A[App Component]
    C[ApodContent Component] -->|Display Data| A[App Component]
```

**Code Snippet (Prop passing):**

```js
<ApodForm fetchApodData={fetchApodData} />
<ApodContent apodData={apodData} />
```

3. **Step 3**: Highlight that lifting state to `App.js` avoids duplicating logic across components.

---

### **Topic 4: How to Control Whether the State Gets Preserved or Reset**

**Teaching Notes:**

- Discuss scenarios where it’s important to reset state (e.g., when fetching new data).
- In contrast, certain state (e.g., form inputs) may need to be preserved.

**Activity 4: Reset the `apodData` state when a new request is made**

1. **Step 1**: Modify the `fetchApodData` function to reset `apodData` before fetching new data.

**Code Snippet:**

```js
const fetchApodData = async (params) => {
  setApodData(null); // Reset the state
  setError("");
  ...
};
```

2. **Step 2**: Explain how this ensures that old data is not shown while new data is loading.

3. **Step 3**: Review the `error` state reset in a similar manner, ensuring the previous error message does not persist across fetches.

---

### **Topic 5: How to Consolidate Complex State Logic in a Function**

**Teaching Notes:**

- Discuss how to avoid scattering complex logic throughout the app by consolidating it into a single place.
- Focus on reducing duplication and improving readability.

**Activity 5: Refactor `fetchApodData`**

1. **Step 1**: Introduce a utility function to consolidate query parameters.

**Code Snippet:**

```js
const buildApiUrl = (params) => {
  const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";
  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  for (const key in params) {
    apiUrl += `&${key}=${params[key]}`;
  }
  return apiUrl;
};
```

2. **Step 2**: Modify `fetchApodData` to use the `buildApiUrl` function.

**Code Snippet:**

```js
const fetchApodData = async (params) => {
  const apiUrl = buildApiUrl(params);
  ...
};
```

3. **Step 3**: Explain how this refactoring helps scale and manage complex logic.

---

### **Topic 6: How to Pass Information Without Prop Drilling**

**Teaching Notes:**

- Introduce the problem of prop drilling, where props are passed through many layers unnecessarily.
- Explain alternatives such as React Context for managing state globally.

**Activity 6: Discuss Context API as an alternative to prop drilling**

1. **Step 1**: Discuss the current example where `fetchApodData` is passed down as a prop.
2. **Step 2**: Introduce the React Context API (brief overview, without full implementation).
3. **Step 3**: Explain how React Context can be used to avoid prop drilling when the app scales.

**Note**: This topic is more theoretical for now, but encourage students to research Context API after class for more advanced state management scenarios.

---

### **Topic 7: How to Scale State Management as Your App Grows**

**Teaching Notes:**

- Discuss when to move from local state to global state management.
- Introduce Redux or Zustand as potential libraries for scaling state management.

**Activity 7: Group Discussion**

1. **Step 1**: Divide students into groups to discuss how the app might grow (e.g., adding more features, needing to store more complex data).
2. **Step 2**: Ask students to present how they would approach scaling state in a growing application.
3. **Step 3**: Briefly demonstrate how a simple state store (like Redux) would look in this app.

**Optional Code Snippet (Redux-style structure):**

```js
// A basic reducer function for global state management
const apodReducer = (state, action) => {
  switch (action.type) {
    case "SET_APOD_DATA":
      return { ...state, apodData: action.payload };
    default:
      return state;
  }
};
```
