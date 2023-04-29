import React from "react";
import { CartState } from "../../../Context/Context";
import Rating from "./Rating";
import HoverEffect from "./HoverEffect";
import { Link } from "react-router-dom";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  //   console.log(prod.inStock);
  return (
    <div>
      <div className="card">
        <Link to={`/products/${prod.id}`}>
          <HoverEffect src1={prod.image1} src2={prod.image2} />
        </Link>
        <div className="p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="badge">Total Stock: {prod.inStock}</span>
            <span>
              {" "}
              {prod.fastDelivery ? (
                <div className="bg-green-400 px-3 py-1 rounded-full text-xs text-white">
                  Fast Delivery
                </div>
              ) : (
                <div className="badge">4 days delivery</div>
              )}
            </span>
          </div>
          {/* product title */}
          <h2 className="product-title"> {prod.name}</h2>
          <div>
            <span className="hover:text-red-500 font-bold">
              Price: {prod.price}$
            </span>
          </div>
          <div className="inline-flex">
            <Rating rating={prod.rating} />
          </div>
          <div className=" flex gap-2">
            {cart.some((p) => p.id === prod.id) ? (
              <button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}
                className="btn-warning"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  });
                }}
                disabled={!prod.inStock}
                className={`btn-primary ${!prod.inStock && "opacity-50"}`}
              >
                {!prod.inStock ? "Out Of Stock" : "Add To Cart"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
