import React from "react";
import gpu from "../../assets/images/gpu.png";
import whoLines from "../../assets/images/who-lines.png";
import whobg from "../../assets/images/who-we-bg.png";
import who1 from "../../assets/images/who-1.png";
import who2 from "../../assets/images/who-2.png";
import who3 from "../../assets/images/who-3.png";
import who4 from "../../assets/images/who-4.png";

const WhoWe = () => {
  return (
    <div className="pt-[50px] pb-[50px] lg:pb-[70px] 2xl:pb-[90px]">
      <p className="gradient-text uppercase text-center font-futura-medium font-medium text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
        Who we are?
      </p>
      <div className="min-w-full relative">
        <div className="absolute center-child w-full" style={{ zIndex: 2 }}>
          <img src={whoLines} alt="" className="w-full" />
        </div>
        <div className="absolute center-child w-full" style={{ zIndex: 1 }}>
          <img src={whobg} alt="" className="w-full" />
        </div>
        <div
          className="w-full mx-auto homepage-container homepage-container-resp px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] flex justify-center relative"
          style={{ zIndex: 3 }}
        >
          <div className="absolute center-child">
            <svg
              width="110"
              height="110"
              viewBox="0 0 110 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[70px] h-[70px] 2xl:w-[110px] 2xl:h-[110px]"
            >
              <path
                d="M55 96.25C77.7817 96.25 96.25 77.7817 96.25 55C96.25 32.2183 77.7817 13.75 55 13.75C32.2183 13.75 13.75 32.2183 13.75 55C13.75 77.7817 32.2183 96.25 55 96.25Z"
                stroke="white"
                stroke-width="4"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M68.75 55L45.8333 41.25V68.75L68.75 55Z"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <img src={gpu} alt="gpu" className="w-[80%] lg:w-[70%] 2xl:w-[60%]" />
        </div>
      </div>
      <div
        className="w-full lg:w-[70%] mx-auto homepage-container homepage-container-resp px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] relative"
        style={{ zIndex: 3 }}
      >
        <p className="w-full text-center text-white font-inter font-light text-[16px] lg:text-[18px] mb-[15px] tracking-[2px]">
          Powered by top-tier tech stacks
        </p>
        <div className="h-[1px] w-full lg:w-[70%] mx-auto bg-[#FFFFFF1A]"></div>
        <div className="flex flex-wrap justify-center items-center gap-[30px] md:gap-[50px] my-[15px]">
          <img src={who1} alt="" className="" />
          <img src={who2} alt="" className="" />
          <img src={who3} alt="" className="" />
          <img src={who4} alt="" className="" />
        </div>
        <div className="h-[1px] w-full lg:w-[70%] mx-auto bg-[#FFFFFF1A]"></div>
      </div>
    </div>
  );
};

export default WhoWe;
