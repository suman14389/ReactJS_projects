import React, { useState } from "react";
import "./App3.css";

function AddList() {
  const [data, setData] = useState({});
  const addClickHandler = () => {
    const element = document.getElementById("description");
    console.log(element.value);
    element.value = "";
  };

  return (
    <div className="left-container">
      <div className="left-header">
        {" "}
        Hello. Namaste !!!
        <h2> To Do List Application..</h2>
      </div>
      <div className="left-body">
        <p> What's on your List </p>
        <input
          type="text"
          placeholder="Add your To do..."
          id="description"
          required
        />
        <p> Add your to do to the calendar </p>
        <input type="date" />

        <p> Add deadline to your to do</p>
        <input type="date" />

        <p> Choose one category</p>
        <div class="radio-container">
          <label>
            <input type="radio" name="option" value="option1" />
            <span>Work</span>
          </label>
          <label>
            <input type="radio" name="option" value="option2" />
            <span>Home</span>
          </label>
          <label>
            <input type="radio" name="option" value="option3" />
            <span>Others</span>
          </label>
        </div>
      </div>
      <button onClick={addClickHandler}> Add to the list</button>
    </div>
  );
}

export default AddList;
