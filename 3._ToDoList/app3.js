import React from "react";
import ReactDOM from "react-dom/client";
import "./App3.css";
import AddList from "./AddList.js";
import ShowList from "./ShowList.js";

function App() {
  return (
    <div className="app-container">
      <AddList />
      <ShowList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
