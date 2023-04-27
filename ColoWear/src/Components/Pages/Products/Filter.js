import React from "react";

const Filter = () => {
  return (
    <div>
      <div className=" gap-3 border text-xs p-3 ">
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
          {/* <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M13.414 12.586a7 7 0 1 1-1.414-1.414l-3.31-3.31a5 5 0 1 0 1.414 1.414l3.31 3.31z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
