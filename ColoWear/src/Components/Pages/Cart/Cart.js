import React, { useEffect, useState } from "react";
import { CartState } from "../../../Context/Context";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => 20 + acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div className="bg-gray-100">
      <div className=" p-10 text-black flex justify-center items-center ">
        <div className="text-center">
          <h1
            className="text-4xl mb-5 bg-transparent relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
            before:bottom-0 before:left-0 before:bg-red-500
            before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
            before:transition before:ease-in-out before:duration-300 "
          >
            Booking Page
          </h1>
          <p>Details about your Products</p>
        </div>
      </div>
      {cart.length > 0 ? (
        <>
          <div className="container mx-auto lg:w-[55rem] border-b bg-white p-5">
            <div className="flex w-full ">
              <div className="w-full">
                <h1>Product details</h1>
              </div>
              <div className="lg:flex w-full justify-between hidden lg:visible">
                <h1>Gender</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Total</h1>
                <h1>Delete</h1>
              </div>
            </div>
          </div>
          {cart.map((prod) => (
            <div key={prod.id} className="bg-gray-100">
              <div className="">
                <div className="container mx-auto lg:w-[55rem] border-b bg-white p-5">
                  <div className="lg:flex w-full ">
                    <div className="w-full">
                      <div className="avatar flex items-center gap-4">
                        <div className="w-16 h-16 rounded flex">
                          <img src={prod.image1} alt={prod.name} />
                        </div>
                        <p>{prod.name}</p>
                      </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                      <h1>{prod.gender}</h1>
                      <h1>{prod.price}$</h1>
                      <div className="md:w-2/12">
                        <select
                          value={prod.qty}
                          onChange={(e) =>
                            dispatch({
                              type: "CHANGE_CART_QTY",
                              payload: {
                                id: prod.id,
                                qty: e.target.value,
                              },
                            })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                        >
                          {[...Array(prod.inStock).keys()].map((x) => (
                            <option key={x + 1}>{x + 1}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex justify-center items-center">
                        <span className="ml-4">{prod.price}</span>
                      </div>

                      <AiFillDelete
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                        className="text-xl cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="container mx-auto lg:w-[55rem] border-b bg-white p-5">
            <div className="border-t flex justify-end">Tax: 5$</div>
            <div className="flex justify-end">Shipping: 15$</div>
            <div className="flex justify-between border-t">
              <h1>Subtotal:</h1>
              <h1>{total}$</h1>
            </div>
            <div className="flex justify-end mt-3">
              <button className="btn btn-warning ">Book</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white p-5 container mx-auto lg:w-[55rem] text-center border">
            <p className="">CART IS EMPTY</p>
            <p>
              Please Go back to{" "}
              <span className="">
                <Link to="/products">
                  <button className=" rounded-md p-3 bg-red-400 text-white hover:bg-red-500 mt-10 mb-10 md:w-48 w-32 text-xs md:text-base">
                    PRODUCT PAGE !
                  </button>
                </Link>
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
