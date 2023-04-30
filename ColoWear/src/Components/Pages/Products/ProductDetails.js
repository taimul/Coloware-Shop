import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartState } from "../../../Context/Context";
import Rating from "./Rating";
import { toast } from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    state: { productDetail, cart },
    fetchProductDetail,
    dispatch,
  } = CartState();
  //

  // const memoizedProductDetail = useMemo(() => productDetail, [productDetail]);
  try {
    useEffect(() => {
      if (id && id !== "") fetchProductDetail(id);
    }, [id]);
  } catch (error) {
    console.log(error);
  }

  // console.log(productDetail);

  return (
    <div className="container mx-auto max-w-6xl">
      {productDetail && (
        <div className="sm:flex p-4">
          <div className="">
            <img
              src={productDetail.image2}
              alt={productDetail.name}
              className="sm:w-96 w-full h-96 rounded-md"
            />
          </div>
          <div className="md:w-[500px]">
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-2xl font-bold"> {productDetail.name}</h2>

              <div className="flex items-center gap-2">
                <span className="badge">
                  Total Stock: {productDetail.inStock}
                </span>
                <span>
                  {" "}
                  {productDetail.fastDelivery ? (
                    <div className="bg-green-400 px-3 py-1 rounded-full text-xs text-white">
                      Fast Delivery
                    </div>
                  ) : (
                    <div className="badge">4 days delivery</div>
                  )}
                </span>
                <span className="">
                  {productDetail.type === "trending" ? (
                    <div className="bg-red-500 px-3 py-1 rounded-full text-xs text-white">
                      <p>Trending</p>
                    </div>
                  ) : (
                    <div className="bg-purple-500 px-3 py-1 rounded-full text-xs text-white">
                      <p>New Arrives</p>
                    </div>
                  )}
                </span>
              </div>
              <p className="mt-5 mb-2">{productDetail.description}</p>
              {/* product title */}

              <div className="flex items-center">
                <Rating rating={productDetail.rating} />
              </div>
              <div className="flex items-center">
                <span className="hover:text-red-500 font-bold sm:text-xl">
                  Price: {productDetail.price}$
                </span>
              </div>
              <div className="sm:mt-4">
                {cart.some((p) => p.id === productDetail.id) ? (
                  <button
                    onClick={() => {
                      toast.error("Item Removed", {
                        position: "bottom-center",
                        duration: 4000,
                      });
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: productDetail,
                      });
                    }}
                    className="btn-warning"
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      toast.success("Item Added", {
                        position: "bottom-center",
                        duration: 4000,
                      });
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: productDetail,
                      });
                    }}
                    disabled={!productDetail.inStock}
                    className={`btn-primary ${
                      !productDetail.inStock && "opacity-50"
                    }`}
                  >
                    {!productDetail.inStock ? "Out Of Stock" : "Add To Cart"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        // <>
        //   <h3>product name : {productDetail.name}</h3>
        //   <p>{productDetail.type}</p>
        //   <p>{productDetail.price}</p>
        //   <div className=" flex gap-2">
        //     {cart.some((p) => p.id === productDetail.id) ? (
        //       <button
        //         onClick={() => {
        //           dispatch({
        //             type: "REMOVE_FROM_CART",
        //             payload: productDetail,
        //           });
        //         }}
        //         className="btn-warning"
        //       >
        //         Remove From Cart
        //       </button>
        //     ) : (
        //       <button
        //         onClick={() => {
        //           dispatch({
        //             type: "ADD_TO_CART",
        //             payload: productDetail,
        //           });
        //         }}
        //         disabled={!productDetail.inStock}
        //         className={`btn-primary ${
        //           !productDetail.inStock && "opacity-50"
        //         }`}
        //       >
        //         {!productDetail.inStock ? "Out Of Stock" : "Add To Cart"}
        //       </button>
        //     )}
        //   </div>
        // </>
      )}
    </div>
  );
};

export default ProductDetails;
