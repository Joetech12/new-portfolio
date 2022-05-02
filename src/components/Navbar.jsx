import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="flex justify-between items-center h-[70px] max-w-[1240px] mx-auto px-4">

      {/* Logo */}
      <div className="">
        <img
          src="/joetechlogo.png"
          alt="Jotetech-logo"
          className="h-[40px] cursor-pointer"
        />
      </div>

      {/* Navmenu */}
      <ul className="md:flex hidden flex-nowrap ">
        <li className="px-4 py-2 cursor-pointer hover:text-gray-300">Home</li>
        <li className="px-4 py-2 cursor-pointer hover:text-gray-300">
        Services
        </li>
        <li className="px-4 py-2 cursor-pointer hover:text-gray-300">
        Portfolio
        </li>
        <li className="px-4 font-semibold rounded-lg ml-2 text- py-2 bg-white text-black hover:bg-gray-100 flex cursor-pointer">
        Contact
        </li>
      </ul>

        {/* menu button */}
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer mb-5 mt-5 ease-in-out duration-500"
      >
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

        {/* Drawout menu */}
      <div
        className={
          !nav
            ? "fixed md:hidden px-4 flex flex-col items-center right-0 top-0 h-full w-[50%] md:w-[30%] bg-[#0a0a0a] ease-in-out duration-[150ms] z-50"
            : "fixed right-[-100%]"
        }
      >

        {/* Drawout menu */}
        <div
          onClick={handleNav}
          className="cursor-pointer mb-5 ml-2 mt-[25px] ease-in-out duration-400 z-50"
        >
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Drawout Navmenu */}
        <ul className="uppercase w-full h-full flex flex-col items-center justify-start pt-[200px]">
          <li className="w-full py-4 text-center px-4 cursor-pointer hover:text-gray-400 border-b-[1px] border-t-[1px] border-gray-400/20">Home</li>
          <li className="w-full py-4 text-center px-4 cursor-pointer hover:text-gray-400 border-b-[1px] border-gray-400/20">Services</li>
          <li className="w-full py-4 text-center px-4 cursor-pointer hover:text-gray-400 border-b-[1px] border-gray-400/20">Portfolio</li>
          <li className="w-full py-4 text-center px-4 cursor-pointer hover:text-gray-400 border-b-[1px] border-gray-400/20">Contact</li>
        </ul>

        <img src="/gfx1.svg" alt="logo1" className="h-[40px] my-5"/>

      </div>



    </div>
  );
};

export default Navbar;
