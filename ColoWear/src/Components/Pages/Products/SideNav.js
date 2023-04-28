import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../../../Context/Context";

const SideNav = () => {
  const {
    productDispatch,
    productState: { byGender, byCategory, byType },
  } = CartState();
  return (
    <div className="md:p-10 p-5 border flex justify-evenly md:grid gap-4 bg-gray-50">
      <div>
        <h2 className="border-b font-bold uppercase text-orange-400">
          Categories
        </h2>
        <ul className="list-none">
          <button
            className=" hover:text-red-400 inline-block focus:outline-none focus:border-b border-red-400 focus:outline-none focus:border-b border-red-400"
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_GENDER",
                payload: "male",
              })
            }
            checked={byGender}
          >
            Men
          </button>
          <br />
          <button
            className="cursor-pointer hover:text-red-400 inline-block focus:outline-none focus:border-b border-red-400 "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_GENDER",
                payload: "female",
              })
            }
            checked={byGender}
          >
            Women
          </button>
          <br />
          <button
            className="cursor-pointer hover:text-red-400 inline-block focus:outline-none focus:border-b border-red-400 "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_TYPE",
                payload: "trending",
              })
            }
            checked={byType}
          >
            Trending
          </button>
          <br />
          <button
            className="cursor-pointer hover:text-red-400 inline-block focus:outline-none focus:border-b border-red-400 "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_TYPE",
                payload: "newArrivals",
              })
            }
            checked={byType}
          >
            New Arrivals
          </button>
        </ul>
      </div>
      <div>
        <h2 className="border-b font-bold uppercase text-orange-400">
          More Options
        </h2>
        <ul>
          <button
            className="cursor-pointer hover:text-red-400 inline-block focus:outline-none focus:border-b border-red-400 "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "clothing",
              })
            }
            checked={byCategory}
          >
            Cloths
          </button>
          <br />
          <button
            className="cursor-pointer hover:text-red-400 inline-block focus:outline-none focus:border-b border-red-400 "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "watch",
              })
            }
            checked={byCategory}
          >
            Watch
          </button>
          <br />
          <button
            className="cursor-pointer hover:text-red-400 inline-block focus:outline-none focus:border-b border-red-400 "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "shoes",
              })
            }
            checked={byCategory}
          >
            Shoes
          </button>
          <br />
          <button
            className="cursor-pointer hover:text-red-400 inline-block focus:outline-none focus:border-b border-red-400"
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "bags",
              })
            }
            checked={byCategory}
          >
            Bags
          </button>
        </ul>
      </div>
      {/* <h2 className="border-b">Categories</h2> */}
      {/* <div className="md:grid flex gap-5">
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Trending</li>
          <li>New Arrivals</li>
        </ul>

        <div>
          <h2 className="border-b hidden md:block">More Options</h2>
          <ul>
            <li>Cloths</li>
            <li>Watch</li>
            <li>Shoes</li>
            <li>Bags</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default SideNav;
