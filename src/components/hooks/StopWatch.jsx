import React, { useEffect, useState } from "react";

const StopWatch = () => {
  let [val, setVal] = useState(0);
  let [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setVal((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);
  return (
    <div
      style={{
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        border: "solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>{val}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default StopWatch;
