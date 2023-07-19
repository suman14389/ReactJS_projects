import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import QuestionCard from "./QuestionCard.js";

function QuizApp() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  // const restartQuiz = () => {
  //   console.log("xyz");
  //   setIsQuizStarted(false);
  // };

  return (
    <div className="app-container">
      {isQuizStarted ? (
        <QuestionCard />
      ) : (
        <div className="home-page">
          {" "}
          <h2> Welcome to Javascript Quiz</h2>{" "}
          <button id="start-quiz" onClick={() => setIsQuizStarted(true)}>
            {" "}
            Start Quiz
          </button>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QuizApp />);
