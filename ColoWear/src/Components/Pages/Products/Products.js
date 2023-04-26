import React from "react";
import { CartState } from "../../../Context/Context";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const {
    state: { products },
  } = CartState();
  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
