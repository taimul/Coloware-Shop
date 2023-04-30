import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import men from "../../../Assets/Men.jpg";
import women from "../../../Assets/Women.jpg";
import { Link } from "react-router-dom";

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return (
    <div className="relative container mx-auto md:flex gap-5 mt-5 mb-10 p-3">
      <div
        className="bg-cover bg-center lg:h-[700px] h-72 w-full flex flex-col justify-center items-center text-white gap-5 lg:rounded-2xl mb-2 md:mb-0 rounded-md "
        style={{ backgroundImage: `url(${women})` }}
        data-aos="fade-up" // Add data-aos attribute and specify animation type
      >
        <p className="text-sm" data-aos="fade-up" data-aos-delay="200">
          NEW IN
        </p>
        <h1 className="text-2xl" data-aos="fade-up" data-aos-delay="400">
          WOMEN'S
        </h1>
        <Link to="/products">
          <button
            className="btn-default"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Shop Now
          </button>
        </Link>
      </div>
      <div
        className="bg-cover bg-center lg:h-[700px] h-72 w-full flex flex-col justify-center items-center text-white gap-5 lg:rounded-2xl rounded-md"
        style={{ backgroundImage: `url(${men})` }}
        data-aos="fade-up" // Add data-aos attribute and specify animation type
      >
        <p className="text-sm" data-aos="fade-up" data-aos-delay="200">
          NEW IN
        </p>
        <h1 className="text-2xl" data-aos="fade-up" data-aos-delay="400">
          MEN'S
        </h1>
        <Link to="/products">
          <button
            className="btn-default"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
