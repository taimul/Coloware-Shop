import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import img1 from "../../../Assets/Banner/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow.jpg";
import img2 from "../../../Assets/Banner/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-green-sweater-jeans-fashion-male-posing-studio-near-blue-wall.jpg";
import img3 from "../../../Assets/Banner/serious-concentrated-young-man-standing-isolated.jpg";
import img4 from "../../../Assets/Banner/stunning-barefooted-woman-trendy-fur-coat-dancing-laughing-photoshoot.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const slideImg = [
    {
      id: "01",
      image: img1,
    },
    {
      id: "02",
      image: img2,
    },
    {
      id: "03",
      image: img3,
    },
    {
      id: "04",
      image: img4,
    },
  ];
  return (
    <div className="relative z-0 md:mt-[-120px]">
      <Swiper
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {slideImg.map((img) => (
          <SwiperSlide key={img.id}>
            <div
              className="relative lg:h-[850px] h-[300px] md:h-[400px]  bg-no-repeat bg-cover flex flex-col justify-center"
              style={{
                backgroundImage: `url(${img.image})`,
              }}
            >
              <div className="container mx-auto md:p-10 p-20 mt-10 lg:mt-0 ">
                <h1 className="text-white lg:text-6xl md:text-4xl text-xl font-bold">
                  New Amazing <br />
                  Staff is Here
                </h1>
                <Link to="/">
                  <button className=" rounded-full p-3 bg-red-400 text-white hover:bg-red-500 mt-10 mb-10 md:w-48 w-32 text-xs md:text-base">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
