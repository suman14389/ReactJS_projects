import React, { useState } from "react";
import { data as QuestionList } from "./data.js";
import "./questionCard.css";
import Score from "./Score.js";

function QuestionCard() {
  const [presentQuestionIndex, setPresentQuestionIndex] = useState(0);
  const optionPrefix = ["A", "B", "C", "D"];
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const initialAnsweredArray = [...Array(10)].map(() => "");
  const [answeredArrayIndex, setAnswerdArrayIndex] =
    useState(initialAnsweredArray);

  const handlePrevClick = () =>
    setPresentQuestionIndex(presentQuestionIndex - 1);

  const handleNextClick = () =>
    setPresentQuestionIndex(presentQuestionIndex + 1);

  const handleOptionClick = (index) => {
    const updatedAnswerArrayIndex = [...answeredArrayIndex];
    updatedAnswerArrayIndex[presentQuestionIndex] = index;
    setAnswerdArrayIndex(updatedAnswerArrayIndex);

    const updatedQuestions = [...QuestionList];
    updatedQuestions[presentQuestionIndex].selectedOption = index;
    console.log(QuestionList);
  };

  const handleSubmitQuiz = () => {
    let count = 0;
    [...Array(10)].map((_, index) => {
      if (QuestionList[index].answer === answeredArrayIndex[index] + 1) {
        count++;
      }
    });
    setScore(count);
    setShowScore(true);
  };

  if (showScore) {
    return <Score score={score} />;
  }
  return (
    <div className="question-card">
      <div className="question-tracker">
        Question: {presentQuestionIndex + 1}/10
      </div>
      <div className="question">
        {QuestionList[presentQuestionIndex].question}
      </div>
      <div className="options">
        {QuestionList[presentQuestionIndex].options.map((option, optIndex) => (
          <div
            className="option"
            onClick={() => handleOptionClick(optIndex)}
            id={
              QuestionList[presentQuestionIndex].selectedOption === optIndex
                ? "active"
                : null
            }
          >
            <p id="prefix"> {optionPrefix[optIndex]}</p>
            <p id="content"> {option} </p>
          </div>
        ))}
      </div>
      <div className="buttons">
        {presentQuestionIndex > 0 && (
          <button onClick={handlePrevClick}> Previous </button>
        )}

        {presentQuestionIndex < 9 && (
          <button onClick={handleNextClick} id="next">
            {" "}
            Next
          </button>
        )}

        {presentQuestionIndex === 9 && (
          <button id="next" onClick={handleSubmitQuiz}>
            {" "}
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionCard;
