import React from "react";
import { CartState } from "../../../Context/Context";
import SingleProduct from "./SingleProduct";
import SideNav from "./SideNav";
import Filter from "./Filter";

const Products = () => {
  const {
    state: { products },
    productState: {
      sort,
      byStock,
      byFastDelivery,
      byRating,
      searchQuery,
      byGender,
      byType,
      byCategory,
    },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byGender) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.gender === byGender
      );
    }
    if (byType) {
      sortedProducts = sortedProducts.filter((prod) => prod.type === byType);
    }
    if (byCategory) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.category === byCategory
      );
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="container mx-auto">
      <div className="md:flex gap-6 grid">
        <div className="md:w-2/6 lg:w-3/12 ">
          <SideNav />
        </div>

        <div className="w-full">
          <Filter />
          <div className="grid grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
            {transformProducts().map((prod) => (
              <SingleProduct prod={prod} key={prod.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
