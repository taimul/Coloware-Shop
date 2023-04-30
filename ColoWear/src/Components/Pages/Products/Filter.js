import React from "react";
import { CartState } from "../../../Context/Context";
import { useLocation } from "react-router-dom";

const Filter = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating },
  } = CartState();
  return (
    <div className="border lg:flex justify-evenly grid p-4 bg-gray-50">
      <div className="flex items-center">
        <h1 className="hidden md:block mr-5 font-bold text-lg opacity-70">
          SORT BY:
        </h1>
        <div className="grid">
          <label className="">
            <input
              className="form-radio text-indigo-500"
              type="radio"
              name="group1"
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh",
                })
              }
              checked={sort === "lowToHigh" ? true : false}
            />
            <span className="ml-1 mr-2 sm:text-base text-sm">Low To High</span>
          </label>
          <label className="">
            <input
              className="form-radio text-indigo-500"
              type="radio"
              name="group1"
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }
              checked={sort === "highToLow" ? true : false}
            />
            <span className="ml-1 mr-2 sm:text-base text-sm">High to Low</span>
          </label>
        </div>
        <div className="grid">
          <label className="">
            <input
              className="form-checkbox text-indigo-500"
              type="checkbox"
              name="group1"
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_DELIVERY",
                })
              }
              checked={byFastDelivery}
            />
            <span className="ml-1 mr-2 sm:text-base text-sm">
              Show Fast Delivery
            </span>
          </label>
          <label className="">
            <input
              className="form-checkbox text-indigo-500"
              type="checkbox"
              name="group1"
              onChange={() =>
                productDispatch({
                  type: "FILTER_BY_STOCK",
                })
              }
              checked={byStock}
            />
            <span className="ml-1 mr-2 sm:text-base text-sm">
              Show Out of Stock
            </span>
          </label>
        </div>
        <button
          className=" rounded-full bg-red-400 text-white hover:bg-red-500 md:w-28 p-2 w-20 text-xs md:text-base"
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear all
        </button>
      </div>
      {useLocation().pathname.split("/")[1] !== "cart" && (
        <div className="relative text-gray-600 border rounded w-full mt-2 lg:mt-0 lg:w-2/6">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="w-full bg-white h-10 px-5  rounded text-sm focus:outline-none"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </div>
      )}
      {/* <div className=" gap-3 border text-xs p-3 ">
        <h1>Sort by:</h1>
        <label className="md:inline-flex md:items-center">
          <input
            className="form-radio text-indigo-500"
            type="radio"
            name="group1"
          />
          <span className="ml-2">A-Z</span>
        </label>
        <label className="md:inline-flex md:items-center">
          <input
            className="form-radio text-indigo-500"
            type="radio"
            name="group1"
          />
          <span className="ml-2">Z-A</span>
        </label>
        <label className="md:inline-flex md:items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="group1"
          />
          <span className="ml-2">Fast Delivery Only</span>
        </label>
        <label className="md:inline-flex md:items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="group1"
          />
          <span className="ml-2">Include Out of Stock</span>
        </label>
        <button className=" rounded-full bg-red-400 text-white hover:bg-red-500 md:w-28 p-2 w-20 text-xs md:text-base">
          Clear all
        </button>
        <div className="relative text-gray-600 border rounded w-2/4 md:w-1/4">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="w-full bg-white h-10 px-5  rounded text-sm focus:outline-none"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Filter;
