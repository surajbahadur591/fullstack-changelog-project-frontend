import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // all routing is done in index.js file

  // Browser  router  is defined  in  index.js and Routes in App.js
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
reportWebVitals();
