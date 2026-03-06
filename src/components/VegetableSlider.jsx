import React, { useState } from "react";

const VegetableSlider = () => {
  // The array of vegetables
  const veggies = ["Carrot", "Broccoli", "Spinach", "Eggplant", "Bell Pepper"];

  // useState to track the current index
  // Destructuring: 'index' is the value, 'setIndex' is the function to update it
  const [index, setIndex] = useState(0);

  // Function to handle the "Next" button
  const nextVeggie = () => {
    setIndex((prevIndex) => (prevIndex + 1) % veggies.length);
  };

  // Function to handle the "Previous" button
  const prevVeggie = () => {
    setIndex((prevIndex) => (prevIndex - 1 + veggies.length) % veggies.length);
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
    >
      <h2>Vegetable Explorer</h2>

      <div style={{ fontSize: "24px", margin: "20px", fontWeight: "bold" }}>
        {veggies[index]}
      </div>

      <button onClick={prevVeggie} style={buttonStyle}>
        Previous
      </button>

      <button onClick={nextVeggie} style={buttonStyle}>
        Next
      </button>

      <p>
        Displaying {index + 1} of {veggies.length}
      </p>
    </div>
  );
};

// Simple inline styling
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  margin: "0 10px",
  cursor: "pointer",
  borderRadius: "5px",
  border: "1px solid #ccc",
  backgroundColor: "#f0f0f0",
};

export default VegetableSlider;
