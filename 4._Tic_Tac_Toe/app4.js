import React from "react";
import ReactDOM from "react-dom/client";
import "./app4.css";
import TicTacToe from "./Tic-Tac-Toe.js";

function App() {
  return (
    <div className="app-container">
      <h1 className="heading"> Multiplayer Tic-Tac-Toe</h1>

      <TicTacToe />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
