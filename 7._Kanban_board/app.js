import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import Backlog from "./Backlog";
import Inprogress from "./Inprogress";
import Complete from "./Complete";
import OnHold from "./OnHold";

function KanbanBoard() {
  const ColumnList = ["Backlog", "In Progress", "Completed", "on Hold"];

  return (
    <div className="app-container">
      <h1 id="heading"> Kanban Board</h1>
      <div className="board-container">
        <Backlog />
        <Inprogress />
        <Complete />
        <OnHold />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<KanbanBoard />);
