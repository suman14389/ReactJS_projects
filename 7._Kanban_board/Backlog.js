import React, { useState } from "react";
import "./app.css";
import "./column.css";

function Backlog() {
  const [showAddButton, setShowAddButton] = useState(true);
  const [listItems, setListItems] = useState([]);

  const handleAddButton = () => setShowAddButton(false);

  const addToList = () => {
    setShowAddButton(true);
    const inputElement = document.getElementById("input");
    const newItem = inputElement.value;
    if (!newItem) return;
    setListItems([...listItems, newItem]);
    inputElement.value = "";
  };

  console.log("ku", listItems);

  return (
    <div className="column">
      <div className="backlog column-heading"> Backlog</div>
      <div className="backlog-content">
        {listItems.map((item) => (
          <div id="item" contentEditable="true">
            {item && item}
          </div>
        ))}
      </div>
      <div>
        {showAddButton ? (
          <div id="add-btn" onClick={handleAddButton}>
            <span>+</span>
            <span> Add Item</span>{" "}
          </div>
        ) : (
          <div className="list-items">
            <button id="save" onClick={addToList}>
              {" "}
              Save item
            </button>
            <textarea placeholder="add item...." id="input" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Backlog;
