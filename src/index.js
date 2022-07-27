import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./config/i18next-config.js";
import "./styles/index.css";
import "./styles/App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
