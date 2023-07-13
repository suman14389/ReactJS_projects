import React from "react";
import ReactDOM from "react-dom/client";
import Quote from "./Quote.js";
import "./App1.css";

function App() {
  return (
    <div className="app-container">
      <Quote />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
