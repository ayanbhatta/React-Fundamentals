import React from "react";

const Counter2 = () => {
  let [count, setCount] = useState(0);
  function increment() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <h1>The count value is {count}</h1>
      <button onClick={increment}>Inc</button>
    </div>
  );
};

export default Counter2;
