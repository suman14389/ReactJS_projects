import React, { useEffect, useState } from "react";
import "./app4.css";
import { winningCombinations } from "./constants.js";
import Toast from "../Toast/toast.js";

function TicTacToe() {
  const [turn, setTurn] = useState("Cross");
  const [boxVisited, setBoxVisisted] = useState(0);
  const [winner, setWinner] = useState("");
  const [isDraw, setIsDraw] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("");

  const handleCircleClick = () => {
    setTurn("Circle");
  };

  const handleCrossClick = () => {
    setTurn("Cross");
  };

  const checkWinner = () => {
    const gameButtons = document.querySelectorAll(".main-container button");
    const gameButtonsText = [...Array(9)].map(
      (_, index) => gameButtons[index].textContent
    );

    winningCombinations.map((arr) => {
      if (
        gameButtonsText[arr[0]] === "X" &&
        gameButtonsText[arr[1]] === "X" &&
        gameButtonsText[arr[2]] === "X"
      ) {
        setWinner("Cross");
      } else if (
        gameButtonsText[arr[0]] === "O" &&
        gameButtonsText[arr[1]] === "O" &&
        gameButtonsText[arr[2]] === "O"
      ) {
        setWinner("Circle");
      }
    });

    if (boxVisited >= 8 && !winner) setIsDraw(true);
  };

  const handleToast = (msg) => {
    setMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  useEffect(() => {
    if (boxVisited >= 4) {
      checkWinner();
    }
  }, [boxVisited]);

  const handleButtonclick = (event) => {
    if (winner) {
      handleToast("Game is over, Please play again");
      return;
    }
    if (isDraw) {
      handleToast("Game is Drawn, Please play again");
      return;
    }

    if (event.target.textContent !== " ") {
      handleToast("This box is already occupied, please choose other box");
      return;
    }
    setBoxVisisted(boxVisited + 1);
    if (turn === "Cross") {
      event.target.textContent = "X";
      setTurn("Circle");
    } else {
      event.target.textContent = "O";
      setTurn("Cross");
    }
  };

  const handlePlayAgain = () => {
    setWinner("");
    setIsDraw(false);
    setShowToast(false);
    setBoxVisisted(0);
    const gameButtons = document.querySelectorAll(".main-container button");
    gameButtons.forEach((item) => (item.textContent = " "));
  };

  const renderPlayAgainButton = () => (
    <button id="play-again" onClick={handlePlayAgain}>
      {" "}
      Play Again
    </button>
  );

  const closeToast = () => setShowToast(false);

  return (
    <div className="ticTacToe">
      <div className="ms-buttons">
        <button onClick={handleCrossClick} id="cross">
          {" "}
          X{" "}
        </button>
        <button onClick={handleCircleClick} id="circle">
          {" "}
          O{" "}
        </button>
      </div>
      {winner ? (
        <div>
          <p className="winner"> Winner is {winner} </p>
          {renderPlayAgainButton()}
        </div>
      ) : isDraw ? (
        <div>
          <p className="draw"> Game is Drawn </p>
          {renderPlayAgainButton()}
        </div>
      ) : (
        <p className="turn"> Turn : {turn} </p>
      )}
      <div className="main-container">
        {[...Array(9)].map((_, index) => (
          <button
            onClick={(e) => handleButtonclick(e, index)}
            id={index}
            disabled={showToast}
          >
            {" "}
          </button>
        ))}
      </div>
      {showToast && <Toast toastMessage={message} closeToast={closeToast} />}
    </div>
  );
}

export default TicTacToe;
