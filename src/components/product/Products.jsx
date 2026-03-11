import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

let Products = () => {
  let [product, setProduct] = useState(null);
  let [category, setCategory] = useState("All");
  let getdata = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setProduct(data);
  };
  console.log(product);
  useEffect(() => {
    getdata();
  }, []); //? Empty array dependency
  let filterCategory =
    category == "All"
      ? product
      : product?.filter((el) => el.category == category);
  return (
    <section>
      <nav
        style={{
          margin: "20px 20px",
          padding: "20px 20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button style={{ fontSize: "24px" }} onClick={() => setCategory("All")}>
          All
        </button>
        <button
          style={{ fontSize: "24px" }}
          onClick={() => setCategory("men's clothing")}
        >
          Mens
        </button>
        <button
          style={{ fontSize: "24px" }}
          onClick={() => setCategory("women's clothing")}
        >
          Womens
        </button>
        <button
          style={{ fontSize: "24px" }}
          onClick={() => setCategory("jewelery")}
        >
          Jewllery
        </button>
        <button
          style={{ fontSize: "24px" }}
          onClick={() => setCategory("electronics")}
        >
          Electronic
        </button>
      </nav>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {
          //!Optional Chaining Operator
          filterCategory?.map((el) => {
            return <ProductCard {...el} key={el.id} />;
          })
        }
      </div>
    </section>
  );
};
export default Products;
