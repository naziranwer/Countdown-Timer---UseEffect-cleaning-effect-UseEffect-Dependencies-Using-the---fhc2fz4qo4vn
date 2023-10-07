import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [input, setInput] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const key = (e) => {
    if (e.key === "Enter") {
      let inputValue;
      if (e.target.value === NaN) {
        inputValue = 0;
      } else {
        inputValue = Math.floor(parseInt(e.target.value)) || 0;
      }

      // Clear existing timer
      if (timerId) {
        clearInterval(timerId);
      }

      // Set new countdown and start the timer
      setCountdown(inputValue);
      startTimer(inputValue);
    }
  };

  const startTimer = (value) => {
    setTimerId(
      setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));

        // Clear the timer when countdown reaches zero
        if (countdown === 0) {
          clearInterval(timerId);
        }
      }, 1000)
    );
  };

  useEffect(() => {
    return () => {
      // Clear the timer when the component unmounts or when starting a new timer
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);

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
