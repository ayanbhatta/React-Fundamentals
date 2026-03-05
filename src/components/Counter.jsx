import React from "react";

const Counter = () => {
  // let count =0;
  let [count, setCount] = useState(0);

  let Increment = () => {
    setCount(count + 1);
  };
  let Decrement = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  let Reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>The count value is {count}</h1>
      <button onClick={Increment}>Inc</button>
      <button onClick={Decrement}>Dec</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Counter;
