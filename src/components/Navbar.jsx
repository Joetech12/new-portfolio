import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", () => {
  //     setNav(nav);
  //   });
  // });
  


  return (
    <div className=" flex justify-between items-center h-[70px] max-w-[1240px] mx-auto px-4">

      {/* Logo */}
      <div className="">
        <img
          src="/joetechlogo.png"
          alt="Jotetech-logo"
          className="md:h-[40px] h-[30px] cursor-pointer"
        />
       
      </div>

      {/* Navmenu */}
      <ul className="md:flex hidden flex-nowrap ">
        <li className="px-5 mx-2 text-[17px] py-[6px] font-semibold cursor-pointer hover:bg-[#d6d6d6] hover:rounded-[50px] transition-all duration-300 ease-out">Home</li>
        <li className="px-5 mx-2 text-[17px] py-[6px] font-semibold cursor-pointer hover:bg-[#d6d6d6] hover:rounded-[50px] transition-all duration-300 ease-out">
        Services
        </li>
        <li className="px-5 mx-2 text-[17px] py-[6px] font-semibold cursor-pointer hover:bg-[#d6d6d6] hover:rounded-[50px] transition-all duration-300 ease-out">
        Portfolio
        </li>

      </ul>

      <div className="hidden md:flex px-5 py-[6px] bg-[#f3f3f3] font-semibold cursor-pointer outline outline-[1px] outline-[gray-400] hover:outline-[2px] hover:bg-[#eaeaea] rounded-[50px]">
        Contact
        </div>

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
            ? "fixed md:hidden px-4 flex flex-col items-center right-0 top-0 h-full w-[50%] md:w-[30%] bg-[#292929] text-white ease-in-out duration-[150ms] z-50"
            : "fixed right-[-100%]"
        }
      >

        {/* Drawout menu */}
        <div
          onClick={handleNav}
          className="cursor-pointer ml-2 mt-[25px] ease-in-out duration-400 z-50"
        >
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Drawout Navmenu */}
        <ul className="uppercase w-full h-full flex flex-col items-center justify-start pt-[150px]">
          <li className="w-full py-5 text-center px-4 cursor-pointer hover:text-gray-400 border-b-[1px] border-t-[1px] border-gray-400/20">Home</li>
          <li className="w-full py-5 text-center px-4 cursor-pointer hover:text-gray-400 border-b-[1px] border-gray-400/20">Services</li>
          <li className="w-full py-5 text-center px-4 cursor-pointer hover:text-gray-400 border-b-[1px] border-gray-400/20">Portfolio</li>
          <li className="w-full py-5 text-center px-4 cursor-pointer hover:text-gray-400 border-b-[1px] border-gray-400/20">Contact</li>
        </ul>

        <div className="flex items-center mb-[20px]">
          <img
          src="/joetechlogo.png"
          alt="Jotetech-logo"
          className="h-[30px] cursor-pointer mr-2"
        />
          <img src="/gfx1.svg" alt="logo1" className="h-[30px] my-5"/>
          </div>

      </div>



    </div>
  );
};

export default Navbar;
