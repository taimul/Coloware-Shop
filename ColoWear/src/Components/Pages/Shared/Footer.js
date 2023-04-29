import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialSkype,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";
const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-white text-black">
        <div className="mx-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4 font-bold">
                COLO<span className="text-red-500">WEAR</span>
              </h4>
              <p>
                224/4 Lost Street <br />
                Rampura, Dhaka-1219 <br />
                Bangladesh <br /> <br />
                <strong>Phone: </strong>
                <span className="hover:text-red-500 cursor-pointer">
                  +880 171 095595
                </span>{" "}
                <br />
                <strong>Email: </strong>
                <span className="hover:text-red-500 cursor-pointer">
                  taimul.haque@gmail.com
                </span>{" "}
                <br />
              </p>
            </div>

            <div className="mb-5">
              <h4 className="pb-4 font-bold">OUR STORE</h4>
              <ul>
                <li className="pb-4 flex items-center">
                  <i className="text-red-500">
                    <BsArrowRightShort />
                  </i>{" "}
                  <a href="#" className="hover:text-red-500">
                    London
                  </a>
                </li>
                <li className="pb-4 flex items-center">
                  <i className="text-red-500">
                    <BsArrowRightShort />
                  </i>{" "}
                  <a href="#" className="hover:text-red-500">
                    Tokyo
                  </a>
                </li>
                <li className="pb-4 flex items-center">
                  <i className="text-red-500">
                    <BsArrowRightShort />
                  </i>{" "}
                  <a href="#" className="hover:text-red-500">
                    NewYork
                  </a>
                </li>
                <li className="pb-4 flex items-center">
                  <i className="text-red-500">
                    <BsArrowRightShort />
                  </i>{" "}
                  <a href="#" className="hover:text-red-500">
                    Toronto
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-bold">CUSTOMER CARE</h4>
              <ul>
                <li className="pb-4 flex items-center">
                  <i className="text-red-500">
                    <BsArrowRightShort />
                  </i>{" "}
                  <a href="#" className="hover:text-red-500">
                    Help Center
                  </a>
                </li>
                <li className="pb-4 flex items-center">
                  <i className="text-red-500">
                    <BsArrowRightShort />
                  </i>{" "}
                  <a href="#" className="hover:text-red-500">
                    How to Buy
                  </a>
                </li>
                <li className="pb-4 flex items-center">
                  <i className="text-red-500">
                    <BsArrowRightShort />
                  </i>{" "}
                  <a href="#" className="hover:text-red-500">
                    Returns & Refunds
                  </a>
                </li>
                <li className="pb-4 flex items-center">
                  <i className="text-red-500">
                    <BsArrowRightShort />
                  </i>{" "}
                  <a href="#" className="hover:text-red-500">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-bold">Join Our NewsLetter</h4>
              <p className="text-gray-900 pb-2">
                Join 25,000+ others and never miss out on new tips, tutorials,
                and more
              </p>
              <form className="flex flex-row flex-wrap border rounded-md">
                <input
                  type="text"
                  className="text-gray-900 w-2/3 p-2 focus:border-red-500"
                  placeholder="email@example.com"
                />
                <button className="p-2 w-1/3 bg-red-500 text-white hover:bg-red-600 rounded-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-800 text-white px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center">
            Copyright{" "}
            <strong>
              <span>
                COLO<span className="text-red-500">WEAR</span>
              </span>
            </strong>
            . All Rights Reserved
          </div>
          <div>
            Designed by{" "}
            <a href="#" className="text-red-600">
              Taimul Haque Pathan
            </a>
          </div>
        </div>
        <div className="text-center text-xl text-white">
          <a href="#" className=" mx-1 inline-block pt-1">
            <i>
              <SlSocialFacebook />
            </i>
          </a>
          <a href="#" className=" mx-1 inline-block pt-1">
            <i>
              <SlSocialSkype />
            </i>
          </a>
          <a href="#" className=" mx-1 inline-block pt-1">
            <i>
              <SlSocialInstagram />
            </i>
          </a>
          <a href="#" className=" mx-1 inline-block pt-1">
            <i>
              <SlSocialYoutube />
            </i>
          </a>
          <a href="#" className=" mx-1 inline-block pt-1">
            <i>
              <SlSocialTwitter />
            </i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
