import React from "react";

const SideNav = () => {
  return (
    <div className="md:p-10 p-5  border flex justify-evenly md:grid gap-4">
      <div>
        <h2 className="border-b">Categories</h2>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Trending</li>
          <li>New Arrivals</li>
        </ul>
      </div>
      <div>
        <h2 className="border-b ">More Options</h2>
        <ul>
          <li>Cloths</li>
          <li>Watch</li>
          <li>Shoes</li>
          <li>Bags</li>
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
