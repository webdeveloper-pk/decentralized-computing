import React from "react";
import whoLines from "../../assets/images/who-lines.png";
import whobg from "../../assets/images/who-we-bg.png";
import who1 from "../../assets/images/who-1.png";
import who2 from "../../assets/images/who-2.png";
import who3 from "../../assets/images/who-3.png";
import who4 from "../../assets/images/who-4.png";

const WhoWe = () => {
  return (
    <div className="pt-[50px] pb-[50px] lg:pb-[70px] 2xl:pb-[90px] overflow-hidden">
      <p
        className="gradient-text uppercase text-center font-futura-medium font-medium text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] relative"
        style={{ zIndex: 3 }}
      >
        Who we are?
      </p>
      <div className="min-w-full relative">
        <div className="absolute center-child w-full" style={{ zIndex: 2 }}>
          <img
            src={whoLines}
            alt=""
            className="w-full"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
          />
        </div>
        <div className="absolute center-child w-full" style={{ zIndex: 1 }}>
          <img src={whobg} alt="" className="w-full" />
        </div>
        <div
          className="w-full mx-auto homepage-container homepage-container-resp px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] flex justify-center relative"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          style={{ zIndex: 3 }}
        >
          <div className="my-[50px] lg::my-[70px] 2xl:my-[100px] w-[100%] md:w-[100%] lg:w-[60%] h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px]">
            <iframe
              title="about"
              src="https://drive.google.com/file/d/1YaLliri8QYC2d6izOBfYLoWEZj4e4IFx/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className="w-[100%] md:w-[80%] lg:w-[100%] 2xl:w-[100%] mx-auto rounded-[11px]"
            ></iframe>
          </div>
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
        <div className="flex flex-wrap justify-center items-center gap-[20px] md:gap-[50px] my-[25px] md:my-[15px]">
          <img
            src={who1}
            alt=""
            className="w-[100px] h-[30px]"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1800"
            // data-aos-offset="-100"
          />
          <img
            src={who2}
            alt=""
            className="w-[140px] h-[26px]"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
          />
          <img
            src={who3}
            alt=""
            className="w-[57px] h-[35px]"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
          />
          <img
            src={who4}
            alt=""
            className="w-[50px] h-[50px]"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1800"
          />
        </div>
        <div className="h-[1px] w-full lg:w-[70%] mx-auto bg-[#FFFFFF1A]"></div>
      </div>
    </div>
  );
};

export default WhoWe;
