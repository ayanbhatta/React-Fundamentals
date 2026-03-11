import React from "react";

const ProductCard = ({ id, category, title, image, price }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        borderRadius: "30px",
        border: "solid",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        style={{
          height: "60%",
          maxWidth: "90%",
        }}
      ></img>
      <h4>{title.slice(0, 16)}</h4>
      <span
        style={{
          width: "150px",
          height: "30px",
          border: "solid black 2px",
          borderRadius: "30px",
          background: "green",
          textAlign: "center",
          color: "white",
        }}
      >
        {category}
      </span>
      <i>price : {price}</i>
    </div>
  );
};

export default ProductCard;
