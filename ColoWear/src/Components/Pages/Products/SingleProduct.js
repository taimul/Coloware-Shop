import React from "react";
import { CartState } from "../../../Context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  //   console.log(cart);
  return (
    <div>
      {prod.name}

      {cart.some((p) => p.id === prod.id) ? (
        <button
          onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: prod,
            });
          }}
          className="text-red-500"
        >
          Remove to cart
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: prod,
            });
          }}
          disabled={prod.inStock === "0"}
          className="text-white bg-green-500 p-2 rounded-full"
        >
          {prod.inStock === "0" ? "Out of Stock" : "Add to cart"}
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
