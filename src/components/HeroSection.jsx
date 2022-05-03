import React from 'react'
import Typed from "react-typed";
import { IoIosArrowDown } from "react-icons/io";


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col w-full md:flex-row justify-between items-center mt-[50px] md:mt-[0px]">
            {/* left-text */}
            <div className="flex flex-col justify-center md:items-start md:h-[90vh]">
                <h1 className="font-bold text-[60px] md:text-[70px]">Hi, I’m Ifeanyi</h1>
                <p className="font-bold text-[30px] md:text-[40px] mb-4 text-center md:text-left">I’m a <Typed
                      strings={["Front-end Developer", "UI Designer", "Graphic Designer"]}
                      typeSpeed={30}
                      backSpeed={20}
                      loop
                    /></p>
                <p className="font-semibold text-[17px] md:text-[20px] w-[350px] md:w-[500px] text-center md:text-left mb-[40px] md:mb-[0px] ">I enjoy visualizing ideas and bringing them to life through design.</p>
            
            </div>
            {/* Right-image */}
            <div className="flex shrink-0 md:h-[90vh] items-center  ">
                <img src="/Me_table_standing.png" alt="ifeanyi-image" className="h-[400px] md:h-[500px] md:w-auto "/>
            </div>
            
        </div>
       
        <div className="md:flex items-center mt-[-50px] hidden cursor-pointer">
            <IoIosArrowDown size={50} className="animate-bounce"/>
            </div>

    </div>
  )
}

export default HeroSection