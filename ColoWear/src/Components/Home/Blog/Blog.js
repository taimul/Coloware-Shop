import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

const blogs = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/handsome-young-man-park_1303-10060.jpg?w=1380&t=st=1682750241~exp=1682750841~hmac=b65dbaf2f0556a610cbd77a728e6af0b3c3dfdd725cfcbadf84f4885d4c82cd6",
    name: "Full form",
    date: "22 March 2023",
    description:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg?w=1380&t=st=1680907264~exp=1680907864~hmac=060272ffcb3b3cf62674f0b74d54f2123750caae3cc6e0a89a4dde1f2754c722",
    name: "BAGS",
    date: "02 March 2023",
    description:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-vector/classic-women-men-shoes-realistic-light-wood-floor-background-with-red-high-heels-pink-pumps-illustration_1284-65187.jpg?w=1380&t=st=1680907329~exp=1680907929~hmac=4141f24adb864c3848f04b1fa3524b3c3109aadd783dcedce317ab697ffd3c1c",
    name: "SHOES",
    date: "17 March 2023",
    description:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?w=1380&t=st=1680907308~exp=1680907908~hmac=d74e1294c12285e8990bf9e924f0e81d2d57ed328f65f273dc2d1be985f80504",
    name: "CLOTHS",
    date: "19 March 2023",
    description:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi",
  },
  {
    id: 5,
    image:
      "https://img.freepik.com/premium-photo/businessman-checking-time-from-watch_105092-104.jpg?w=1380",
    name: "WATCHES",
    date: "20 March 2023",
    description:
      "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi In deleniti eaque aut repudiandae et a id nisi",
  },
];

const Blog = () => {
  return (
    <div className="bg-white">
      <div className=" p-20 text-black flex justify-center items-center">
        <div className="">
          <h1
            className="text-4xl mb-5 bg-transparent relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
          before:bottom-0 before:left-0 before:bg-red-500
          before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
          before:transition before:ease-in-out before:duration-300 "
          >
            Our Blog
          </h1>
          <p>Fashionably Ever After</p>
        </div>
      </div>
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 55,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {blogs.map(({ id, image, name, description, date }) => (
            <SwiperSlide>
              <div className="hero border" key={id}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img src={image} className="h-[500px] " alt="" />
                  <div>
                    <h1 className="text-sm font-bold">
                      <span className="hover:text-red-500 ">#{name},</span>{" "}
                      {date}
                    </h1>
                    <p className="py-6 font-bold text-black hover:text-red-500 cursor-pointer">
                      {description}
                    </p>
                    <div>
                      <button className=" text-black mt-10 mb-10 lg:w-48 underline  decoration-[10px]  decoration-red-600">
                        + READ MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center">
          <button
            className="btn-default mt-10 mb-10 lg:w-48"
            data-aos="fade-up"
          >
            + VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
