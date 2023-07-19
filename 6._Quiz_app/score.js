import React from "react";
import StarRating from "../5._Star_Rating/app5";
import "./score.css";

function Score(props) {
  return (
    <div className="score-container">
      <h1> Thanks for taking Quiz 😄 </h1>
      <h2> Your score is {props.score}/10</h2>
      {/* <div className="rating-component">
        <StarRating className="star-rating" />
      </div> */}
      {/* <button onClick={props.restartQuiz}> Retake Quiz</button> */}
    </div>
  );
}

export default Score;
