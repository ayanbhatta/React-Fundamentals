import React, { useRef } from "react";

const RefCalculator = () => {
  let inp1 = useRef(null);
  let inp2 = useRef(null);
  let resultRef = useRef(null);
  const handleAdd = () => {
    resultRef.current.value =
      parseInt(inp1.current.value) + parseInt(inp2.current.value);
  };
  const handleSub = () => {
    resultRef.current.value =
      parseInt(inp1.current.value) - parseInt(inp2.current.value);
  };
  const handleMul = () => {
    resultRef.current.value =
      parseInt(inp1.current.value) * parseInt(inp2.current.value);
  };
  const handleDiv = () => {
    resultRef.current.value =
      parseInt(inp1.current.value) + parseInt(inp2.current.value);
  };
  return (
    <div>
      inp1
      <input type="text" id="inp1" placeholder="Input 1" ref={inp1} />
      <br />
      inp2
      <input type="text" id="inp2" placeholder="Input 2" ref={inp2} />
      <br />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleMul}>*</button>
      <button onClick={handleDiv}>/</button>
      <br />
      <input type="text" id="res" placeholder="Result" ref={resultRef} />
    </div>
  );
};

export default RefCalculator;
