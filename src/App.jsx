import React from "react";
import Counter from "./components/Counter";
import InfoCard from "./components/InfoCard";
import BackgroundColor from "./components/BackgroundColor";
import Vegetables from "./components/Vegetables";
import Counter2 from "./components/Counter2";
import ConditionalRendering from "./components/ConditionalRendering";
import InstaPost from "./components/InstaPost";
import NextPrev from "./components/NextPrev";

const App = () => {
  return (
    <div>
      {/* <InfoCard />
      <BackgroundColor />
      <Vegetables /> */}
      {/* <Counter2 /> */}
      {/* <ConditionalRendering /> */}
      <InstaPost/>
      <NextPrev/>
    </div>
  );
};

export default App;
