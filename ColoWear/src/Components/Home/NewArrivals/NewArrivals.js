import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products/type/newArrivals")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="bg-gray-100 ">
      <div className=" p-20 text-black flex justify-center items-center">
        <div className="text-center" data-aos="fade-up">
          <h1
            className="text-4xl mb-5 bg-transparent relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
          before:bottom-0 before:left-0 before:bg-red-500
          before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
          before:transition before:ease-in-out before:duration-300 "
          >
            New Arrivals
          </h1>
          <p>Fresh Finds: Our Latest Arrivals!</p>
        </div>
      </div>
      {product.length >= 4 && (
        <>
          <div className="flex container mx-auto gap-4 p-2" data-aos="fade-up">
            <div className="w-1/4 overflow-hidden rounded-md">
              <figure>
                <img
                  src={product[0].image1}
                  alt=""
                  className="object-cover lg:h-[616px] h-[316px]  w-full hover:scale-125 transition-all duration-1000 cursor-pointer "
                />
              </figure>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="flex-1 overflow-hidden rounded-md">
                <figure>
                  <img
                    src={product[1].image1}
                    alt=""
                    className="object-cover lg:h-[300px] h-[150px] w-full hover:scale-125 transition-all duration-1000 cursor-pointer"
                  />
                </figure>
              </div>
              <div className="flex-1 overflow-hidden rounded-md">
                <figure>
                  <img
                    src={product[2].image1}
                    alt=""
                    className="object-cover lg:h-[300px] h-[150px] w-full hover:scale-125 transition-all duration-1000 cursor-pointer"
                  />
                </figure>
              </div>
            </div>
            <div className="w-1/4 overflow-hidden rounded-md">
              <figure>
                <img
                  src={product[3].image1}
                  alt=""
                  className="object-cover lg:h-[616px] h-[316px] w-full hover:scale-125 transition-all duration-1000 cursor-pointer"
                />
              </figure>
            </div>
          </div>
        </>
      )}

      <div className="text-center">
        <Link to="/products">
          <button className="btn-default mt-10 mb-10" data-aos="fade-up">
            VIEW ALL
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
