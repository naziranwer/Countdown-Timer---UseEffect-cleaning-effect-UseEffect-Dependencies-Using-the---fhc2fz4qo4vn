import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  // const [input, SetInput] = useState(0);
  const [countdown, setCountdown] = useState(0);

  const key = (e) => {
    if (e.key === "Enter") {
      const inputValue = Math.floor(parseInt(e.target.value)) || 0;
      setCountdown(inputValue);
    }
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={(e) => key(e)} /> sec.
        </h1>
      </div>
      <div id="current-time">{countdown}</div>
    </div>
  );
};

export default App;
