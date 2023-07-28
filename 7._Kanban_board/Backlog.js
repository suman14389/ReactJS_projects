import React, { useEffect, useState } from "react";
import "./app.css";
import "./column.css";
import backgroundMarginRemover, {
  backgroundMarginAdder,
  getColumnMarginElements,
} from "./constants";

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
  console.log("suman");

  const updateListItems = (removeItem) => {
    const updatedList = listItems.filter((item) => item !== removeItem);
    setListItems(updatedList);
  };

  const drag = (event) => {
    const dataToTransfer = event.target.textContent;
    event.dataTransfer.setData("text", event.target.id);
  };

  const handleDragEnter = (e) => {
    console.log(e.target);

    backgroundMarginAdder(0);
  };

  useEffect(() => {
    getColumnMarginElements();
  }, []);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    var receivedData = ev.dataTransfer.getData("text");

    setListItems([
      ...listItems,
      document.getElementById(receivedData).textContent,
    ]);
    document.getElementById(receivedData).remove();
    backgroundMarginRemover();
  };

  const handleContentEdit = (event, index) => {
    const updateText = event.target.textContent;
    const myArray = [...listItems];
    if (updateText) {
      myArray[index] = updateText;
      setListItems(myArray);
    } else {
      const newArray = myArray.filter((item, i) => i !== index);
      setListItems(newArray);
    }
  };

  return (
    <div className="column">
      <div className="backlog column-heading"> Backlog</div>
      <div
        className="content"
        droppable="true"
        onDragOver={(event) => handleDragOver(event)}
        onDrop={(e) => handleDrop(e)}
        onDragEnter={(e) => handleDragEnter(e)}
      >
        {listItems.map((item, index) => (
          <div
            className="item"
            contentEditable="true"
            draggable="true"
            onDragStart={(e) => drag(e)}
            id={`item-${index}`}
            onBlur={(e) => handleContentEdit(e, index)}
            suppressContentEditableWarning
          >
            {item && item}
          </div>
        ))}
      </div>
      <div
        className="addItem-container"
        id={!showAddButton && "bottom-container"}
      >
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
