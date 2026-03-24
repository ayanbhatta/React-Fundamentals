import React, { useRef } from "react";

const RefEx = () => {
  let myRef = useRef("");
  let handleClick = () => {
    myRef.current.style.background = "red";
    myRef.current.style.color = "yellow";
    myRef.current.style.width = "300px";
    myRef.current.value = "Bob";
  };
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default RefEx;
