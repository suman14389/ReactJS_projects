import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Quote() {
  const ApiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  let Quotes = [];

  const generateQuote = () => {
    const newQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
    ModifyDom(newQuote);
  };

  const ModifyDom = (newQuote) => {
    const DomQuote = document.getElementById("quote");
    const DomAuthor = document.getElementById("author");

    DomQuote.textContent = newQuote.text;
    DomAuthor.textContent = newQuote.author;
  };

  const getQuotes = async () => {
    const response = await fetch(ApiURL);
    Quotes = await response.json();
    generateQuote();
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="quote-container">
      <FontAwesomeIcon icon={faQuoteLeft} id="icon" />
      <span id="quote">
        Quote comes here , the next quote will be shown tomorrow..
      </span>
      <div className="author-button">
        <span id="author"> Author </span>
        <button id="button" onClick={generateQuote}>
          {" "}
          Next quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
