import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartState } from "../../../Context/Context";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    state: { productDetail, cart },
    fetchProductDetail,
    dispatch,
  } = CartState();
  useEffect(() => {
    if (id && id !== "") fetchProductDetail(id);
  }, [id]);
  // const memoizedProductDetail = useMemo(() => productDetail, [productDetail]);

  // console.log(productDetail);

  return (
    <div>
      {productDetail && (
        <>
          <h3>{productDetail.name}</h3>
          <p>{productDetail.type}</p>
          <p>{productDetail.price}</p>
          <div className=" flex gap-2">
            {cart.some((p) => p.id === productDetail.id) ? (
              <button
                onClick={() => {
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
        </>
      )}
    </div>
  );
};

export default ProductDetails;
