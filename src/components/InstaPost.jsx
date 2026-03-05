import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
const InstaPost = () => {
  let [like, setLike] = useState(false);
  return (
    <div style={{ width: "fit-content", border: "solid", padding: "10px" }}>
      <img src="./public/vite.svg" />
      <h3>Heading</h3>
      <FaHeart
        style={{ color: like ? "red" : "gray" }}
        onClick={() => setLike(!like)}
      />
    </div>
  );
};

export default InstaPost;
