import React from "react";

const ConditionalRendering = () => {
  let [show, setShow] = useStaste(false);
  console.log(show);
  return (
    <div>

    {/* using    */}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vel.</p>
      )}
    </div>
  );
};

export default ConditionalRendering;
