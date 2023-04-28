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
          <li
            className="cursor-pointer hover:text-red-400 inline-block "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_GENDER",
                payload: "male",
              })
            }
            checked={byGender}
          >
            Men
          </li>
          <br />
          <li
            className="cursor-pointer hover:text-red-400 inline-block "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_GENDER",
                payload: "female",
              })
            }
            checked={byGender}
          >
            Women
          </li>
          <br />
          <li
            className="cursor-pointer hover:text-red-400 inline-block "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_TYPE",
                payload: "trending",
              })
            }
            checked={byType}
          >
            Trending
          </li>
          <br />
          <li
            className="cursor-pointer hover:text-red-400 inline-block "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_TYPE",
                payload: "newArrivals",
              })
            }
            checked={byType}
          >
            New Arrivals
          </li>
        </ul>
      </div>
      <div>
        <h2 className="border-b font-bold uppercase text-orange-400">
          More Options
        </h2>
        <ul>
          <li
            className="cursor-pointer hover:text-red-400 inline-block "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "clothing",
              })
            }
            checked={byCategory}
          >
            Cloths
          </li>
          <br />
          <li
            className="cursor-pointer hover:text-red-400 inline-block "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "watch",
              })
            }
            checked={byCategory}
          >
            Watch
          </li>
          <br />
          <li
            className="cursor-pointer hover:text-red-400 inline-block "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "shoes",
              })
            }
            checked={byCategory}
          >
            Shoes
          </li>
          <br />
          <li
            className="cursor-pointer hover:text-red-400 inline-block "
            onClick={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "bags",
              })
            }
            checked={byCategory}
          >
            Bags
          </li>
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
