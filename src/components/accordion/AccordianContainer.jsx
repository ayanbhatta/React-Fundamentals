import React from "react";
import AccordianCard from "./AccordianCard";

const AccordianContainer = () => {
  const data = [
    {
      question: "What is the primary purpose of 'Lifting State Up' in React?",
      answer:
        "To allow child components to share and sync state by moving it to their closest common parent.",
    },
    {
      question:
        "Why do we use .slice() on the squares array before updating it?",
      answer:
        "To maintain immutability, which helps React detect changes and allows for features like 'time travel' history.",
    },
    {
      question: "Which React Hook is used to track the board's current state?",
      answer: "useState()",
    },
    {
      question:
        "How does the 'Square' component communicate a click back to the 'Board'?",
      answer: "Through a function passed down as a prop (callback function).",
    },
    {
      question:
        "What is the benefit of keeping a 'history' array in the Game component?",
      answer:
        "It allows the application to store every previous version of the board for undo/redo functionality.",
    },
    {
      question:
        "How many winning combinations exist in a standard 3x3 Tic-Tac-Toe game?",
      answer: "Eight (3 rows, 3 columns, and 2 diagonals).",
    },
    {
      question: "In React, what happens to a component when its state changes?",
      answer:
        "The component and all of its children are re-rendered to reflect the new state in the UI.",
    },
    {
      question: "What does the 'key' prop do when rendering the list of moves?",
      answer:
        "It provides a stable identity for each list item, helping React optimize re-renders and list updates.",
    },
    {
      question: "What value should the squares array be initialized with?",
      answer: "An array of 9 null values: Array(9).fill(null).",
    },
    {
      question:
        "If 'currentMove' is 5, whose turn is it if 'X' always starts at 0?",
      answer:
        "Player 'O' (since odd-numbered moves belong to the second player).",
    },
  ];
  return (
    <div>
      {data.map((el, i) => (
        <AccordianCard {...el} key={i} />
      ))}
    </div>
  );
};

export default AccordianContainer;
