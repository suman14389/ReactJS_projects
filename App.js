import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

function App() {
  const generateImage = (url) => {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.classList.add("image");
    return imgElement;
  };

  const appendtoDOM = (child) => {
    const parent = document.querySelector(".image-container");
    parent.appendChild(child);
  };

  async function callAPI() {
    const response = await fetch("https://meme-api.com/gimme/10");
    const data = await response.json();
    const Imageurls = data.memes.map((item) => item.url);
    Imageurls.map((url, index) => {
      const element = generateImage(url);
      appendtoDOM(element);
    });
  }
  useEffect(() => {
    callAPI();
  }, []);

  const handleScroll = () => {
    const container = document.querySelector(".image-container");

    const remainingSpaceofBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight;

    if (remainingSpaceofBottom < 4) {
      callAPI();
    }
  };

  useEffect(() => {
    const imageContainer = document.querySelector(".image-container");
    imageContainer.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <div id="heading"> Memes and Posts</div>
      <div className="image-container"></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
