import React, { useEffect, useState } from "react";
import SingleProduct from "../../Pages/Products/SingleProduct";
import { Link } from "react-router-dom";

const Trending = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);
  useEffect(() => {
    fetch("https://colowear-server.vercel.app/products/type/trending")
      .then((res) => res.json())
      .then((data) => setTrendingProduct(data));
  }, []);
  return (
    <div>
      <div className=" p-20 text-black flex justify-center items-center">
        <div className="text-center" data-aos="fade-up">
          <h1
            className="text-4xl mb-5 bg-transparent relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
          before:bottom-0 before:left-0 before:bg-red-500
          before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
          before:transition before:ease-in-out before:duration-300 "
          >
            Trending Products
          </h1>
          <p>Find a bright ideal to suit your taste</p>
        </div>
      </div>
      <div
        className="grid grid-cols-2 lg:grid-cols-3 container mx-auto gap-4"
        data-aos="fade-up"
      >
        {trendingProduct.map((prod) => (
          <SingleProduct key={prod.id} prod={prod}></SingleProduct>
        ))}
      </div>
      <div className="text-center">
        <Link to="/products">
          <button className="btn-default mt-10 " data-aos="fade-up">
            VIEW ALL
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Trending;
