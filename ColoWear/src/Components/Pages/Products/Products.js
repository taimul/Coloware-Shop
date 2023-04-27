import React from "react";
import { CartState } from "../../../Context/Context";
import SingleProduct from "./SingleProduct";
import SideNav from "./SideNav";
import Filter from "./Filter";

const Products = () => {
  const {
    state: { products },
  } = CartState();
  //   if (products.length === 0) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div className="container mx-auto">
      <div className="md:flex gap-6 grid">
        <div className="md:w-2/6 lg:w-1/6 ">
          <SideNav />
        </div>

        <div className="md:w-3/4 ">
          <Filter />
          <div className="mt-6">
            {products.map((prod) => (
              <SingleProduct prod={prod} key={prod.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
