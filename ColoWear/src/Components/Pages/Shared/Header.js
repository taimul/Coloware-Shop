import React, { useRef, useState } from "react";
import { BiCart, BiMenu } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = (value) => {
    setSelected(value);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  function handleScroll() {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  window.addEventListener("scroll", handleScroll);
  return (
    <header
      className={`bg-gray-100 md:flex md:justify-between p-8 w-full z-40 sticky md:top-0 ${
        isScrolled ? "delay-150 duration-300" : "bg-transparent text-black"
      }`}
    >
      <button className="btn btn-ghost lg:text-4xl uppercase text-2xl">
        COLO
        <span className="font-bold text-red-600 ">Wear</span>
      </button>
      <div>
        <ul
          className={`md:flex md:items-center absolute md:static  w-full md:z-[-1] z-[1] left-0 md:w-auto md:mt-0 mt-8 md:pl-0 pl-9 transition-all duration-500 ease-in bg-gray-100 md:bg-transparent ${
            open ? " opacity-100" : "left-[-1690px]"
          } md:opacity-100`}
        >
          <Link>
            <li
              className={`${
                selected === "HOME" && "border-b border-red-500"
              } md:my-0 my-4 bg-transparent relative before:content-[''] before:absolute before:block before:md:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-red-500
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
              before:transition before:ease-in-out before:duration-300`}
              onClick={() => handleClick("HOME")}
            >
              HOME
            </li>
          </Link>
          <Link>
            <li
              className={`${
                selected === "PRODUCTS" && "border-b border-red-500"
              } md:my-0 my-4 md:ml-5 bg-transparent relative before:content-[''] before:absolute before:block before:md:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-red-500
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
              before:transition before:ease-in-out before:duration-300`}
              onClick={() => handleClick("PRODUCTS")}
            >
              PRODUCTS
            </li>
          </Link>
          <Link>
            <li
              className={`${
                selected === "ABOUT" && "border-b border-red-500"
              } md:my-0 my-4 md:ml-5 bg-transparent relative before:content-[''] before:absolute before:block before:md:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-red-500
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
              before:transition before:ease-in-out before:duration-300`}
              onClick={() => handleClick("ABOUT")}
            >
              ABOUT
            </li>
          </Link>
          <Link>
            <li
              className={`${
                selected === "CONTACT" && "border-b border-red-500"
              } md:my-0 my-4 md:ml-5 bg-transparent relative before:content-[''] before:absolute before:block before:md:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-red-500
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-middle
              before:transition before:ease-in-out before:duration-300`}
              onClick={() => handleClick("CONTACT")}
            >
              CONTACT
            </li>
          </Link>
          {/* <Link className="flex items-center">
            <li className="md:my-0 my-4 md:ml-5 text-2xl">
              <BiCart />
            </li>
            <p>(10)</p>
          </Link> */}
          <div className="relative flex items-center">
            <div className="">
              {isOpen && (
                <ul
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-md shadow-md"
                >
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/">Option 1</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/">Option 2</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/">Option 3</a>
                  </li>
                </ul>
              )}
            </div>
            {/* Dropdown trigger */}
            <button
              onClick={handleToggle}
              className="md:my-0 my-4 md:ml-5 text-2xl"
            >
              <BiCart className="text-xl" />
            </button>
            <p>(10)</p>
          </div>
        </ul>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden absolute right-8 top-10 text-2xl cursor-pointer"
      >
        {open ? <GrFormClose /> : <BiMenu />}
      </div>
    </header>
  );
};

export default Header;
