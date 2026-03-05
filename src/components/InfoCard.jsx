import React, { useState } from "react";

const InfoCard = () => {
  let [data, setData] = useState({ name: "Ayan", age: 22, roll: 101 });
  let { name, age, roll } = data;
  let ChangeDetails = () => {
    setData({ name: "Atul", age: 26, roll: 105 });
  };
  return (
    <div>
      <h1>Name is {name}</h1>
      <h1>Rollno is {age}</h1>
      <h1>Age is {roll}</h1>
      <button onClick={ChangeDetails}>Change</button>
    </div>
  );
};

export default InfoCard;
