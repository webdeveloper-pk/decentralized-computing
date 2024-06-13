import React from "react";
import heroLines from "../../assets/images/hero-lines.png";
import heroTextLines from "../../assets/images/hero-text-line.png";

const Hero = () => {
  return (
    <div
      className="pt-[100px] md:pt-[100px] lg:pt-[100px] 2xl:pt-[121px] pb-[50px] md:pb-[70px] lg:pb-[100px] 2xl:pb-[126px] overflow-hidden"
      style={{ zIndex: 2 }}
    >
      <div className="w-full mx-auto overflow-hidden relative">
        <div className="flex flex-col items-center justify-center pt-[100px] lg:pt-[200px] 2xl:pt-[250px] ">
          <div className="w-full relative">
            <div className="absolute center-child w-full">
              <img
                src={heroTextLines}
                alt="text"
                className="w-full"
                data-aos="zoom-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                // data-aos-offset="-100"
              />
            </div>
            <div className="mx-auto flex flex-col items-center homepage-container-resp homepage-container px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] overflow-hidden">
              <p
                className="uppercase text-white mx-auto lg:mx-0 w-[100%] md:w-[60%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] text-center font-futura-bold font-bold text-[30px] md:text-[36px] lg:text-[36px] xl:text-[40px] 2xl:text-[55px] lg:leading-[50px] 2xl:leading-[75px]"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="1200"
                // data-aos-offset="-100"
              >
                <p>
                  <span className="text-[#AC9FFF]">Revolut</span>ionizing
                </p>
                <p>
                  <span className="text-[#AC9FFF]">Decent</span>ralized
                </p>
                <p>
                  <span className="text-[#AC9FFF]">Computi</span>ng with AI
                </p>
              </p>
              <p
                className="text-white mt-[10px] lg:mt-[15px] 2xl:mt-[22px] w-full md:w-[70%] lg:w-[60%] xl:w-[55%] 2xl:w-[42%] mx-auto lg:mx-0 text-center font-montserrat font-light text-[15px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="1500"
                // data-aos-offset="-100"
              >
                Find the perfect teammates, conquer challenges, and level up
                your gaming experience like never before.
              </p>
            </div>
          </div>
          <div className="w-full mt-[20px] lg:mt-[30px] flex justify-center">
            <button
              className={`py-[12px] px-[30px] lg:py-[15px] lg:px-[40px] custom-btn bg-transparent flex justify-center items-center rounded-tl-[18px] rounded-bl-[18px] rounded-br-[18px] rounded-tr-[33px] cursor-pointer font-futura-light font-medium text-[16px] lg:text-[16px] xl:text-[22px] 2xl:text-[30px] text-black uppercase`}
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="2000"
              // data-aos-offset="-100"
            >
              <span className="custom-btn-inner">BUY NOW</span>
            </button>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="2000"
        // data-aos-offset="-100"
      >
        <img src={heroLines} alt="lines" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
