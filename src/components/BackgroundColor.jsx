import React, { useState } from "react";

const BackgroundColor = () => {
    let [color, setColor] = useState("red");
  let ThemeChange = () => {
    setColor("green")
  };
  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={ThemeChange}>Change</button>
    </div>
  );
};

export default BackgroundColor;
