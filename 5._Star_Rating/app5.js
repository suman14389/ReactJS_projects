import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./app5.css";

function StarRating() {
  const [indexOfStarClicked, setIndexOfStarClicked] = useState(null);
  const [indexOfStarHovered, setIndexOfStarHovered] = useState(null);
  const [clickRating, setClickRating] = useState(null);
  const [hoverRating, setHoverRating] = useState(null);

  const qualityText = [
    "very bad 🤢",
    "bad 😔",
    "Okay 🥺",
    "Good 😊",
    "Excellent 🤩",
  ];

  const handleStarClick = (index) => {
    setIndexOfStarClicked(index + 1);
    setClickRating(qualityText[index]);
  };

  const handleMouseEnterHover = (index) => {
    setIndexOfStarHovered(index + 1);
    setHoverRating(qualityText[index]);
  };

  const handleMouseLeaveHover = (index) => {
    setIndexOfStarHovered(null);
    setHoverRating(null);
  };

  return (
    <div className="app-container">
      <div className="quality"> {hoverRating || clickRating}</div>
      <div className="star-container">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            icon={faStar}
            id="star"
            key={index}
            onClick={() => handleStarClick(index)}
            color={
              index + 1 <= (indexOfStarHovered || indexOfStarClicked)
                ? "orange"
                : "grey"
            }
            onMouseEnter={() => handleMouseEnterHover(index)}
            onMouseLeave={() => handleMouseLeaveHover(index)}
          />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StarRating />);
export default StarRating;
