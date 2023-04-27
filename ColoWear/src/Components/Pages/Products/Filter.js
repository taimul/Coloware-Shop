import React from "react";

const Filter = () => {
  return (
    <div className="border md:flex justify-evenly grid p-4">
      <div className="flex items-center text-xs md:text-sm w-full">
        <h1 className="hidden md:block">Sort by:</h1>
        <label className="md:inline-flex md:items-center">
          <input
            className="form-radio text-indigo-500"
            type="radio"
            name="group1"
          />
          <span className="ml-1 mr-2">A-Z</span>
        </label>
        <label className="md:inline-flex md:items-center">
          <input
            className="form-radio text-indigo-500"
            type="radio"
            name="group1"
          />
          <span className="ml-1 mr-2">Z-A</span>
        </label>
        <label className="md:inline-flex md:items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="group1"
          />
          <span className="ml-1 mr-2">Fast Delivery Only</span>
        </label>
        <label className="md:inline-flex md:items-center">
          <input
            className="form-checkbox text-indigo-500"
            type="checkbox"
            name="group1"
          />
          <span className="ml-1 mr-2">Include Out of Stock</span>
        </label>
        <button className=" rounded-full bg-red-400 text-white hover:bg-red-500 md:w-28 p-2 w-20 text-xs md:text-base">
          Clear all
        </button>
      </div>
      <div className="relative text-gray-600 border rounded w-full mt-2 md:mt-0 md:w-2/6">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="w-full bg-white h-10 px-5  rounded text-sm focus:outline-none"
        />
      </div>
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
