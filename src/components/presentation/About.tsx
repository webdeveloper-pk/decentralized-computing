import React from "react";
import about from "../../assets/images/about.png";
import ellipse from "../../assets/images/about-ellipse.png";

const About = () => {
  return (
    <div
      className="w-full mx-auto homepage-container pl-[20px] pr-[0px] md:pl-[50px] md:pr-[0px] lg:pr-0 lg:pl-[80px] xl:pl-[90px] 2xl:pl-[200px] py-[50px] lg:py-[70px] 2xl:py-[90px]
    relative"
    >
      <div className="absolute right-0 lg:-right-[20%] xl:-right-[0%] bottom-0">
        <img src={ellipse} alt="ellipse" className="" />
      </div>
      <p className="pr-[20px] md:pr-[50px] lg:pr-[80px] xl:pr-[90px] 2xl:pr-[200px] gradient-text uppercase text-center font-futura-medium font-medium text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
        More about us
      </p>
      <div
        className="mt-[100px] lg:mt-[150px] flex flex-col lg:flex-row lg:justify-between items-center gap-[50px] 2xl:gap-[70px] relative"
        style={{ zIndex: 2 }}
      >
        <div className="w-full lg:w-1/2  pr-[20px] md:pr-[50px] lg:pr-[50px] 2xl:pr-[100px]">
          <div className="flex flex-col gap-y-[50px] 2xl:gap-y-[80px]">
            <div className="flex items-stretch gap-x-[15px] md:gap-x-[20px] 2xl:gap-x-[30px]">
              <div className="min-h-full w-[4px] bg-[#AC9FFF]">
                <div className="min-h-full w-[4px] bg-[#FFFFFF14]"></div>
              </div>
              <div>
                <p className="uppercase font-futura-medium font-medium text-[#AC9FFF] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                  AI-powered mining optimizer
                </p>
                <p className="mt-[7px] font-inter font-light text-[#D4D4D4] text-[14px] md:etxt-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                  Maximize mining performance and profitability with Epsilon
                  AI's AI-powered mining optimizer. Our advanced algorithms and
                  machine learning techniques enhance mining efficiency, helping
                  you achieve your mining goals effortlessly.
                </p>
              </div>
            </div>
            <div className="flex items-stretch gap-x-[15px] md:gap-x-[20px] 2xl:gap-x-[30px]">
              <div className="min-h-full w-[4px] bg-[#ffffff]">
                <div className="min-h-full w-[4px] bg-[#FFFFFF14]"></div>
              </div>
              <div>
                <p className="uppercase font-futura-medium font-medium text-[#ffffff] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                  Revenue sharing
                </p>
                <p className="mt-[7px] font-inter font-light text-[#D4D4D4] text-[14px] md:etxt-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                  Participate in our transparent revenue-sharing model and earn
                  rewards based on your contribution to the network. Epsilon AI
                  incentivizes active participation and collaboration, ensuring
                  everyone shares in the platform's success.
                </p>
              </div>
            </div>
            <div className="flex items-stretch gap-x-[15px] md:gap-x-[20px] 2xl:gap-x-[30px]">
              <div className="min-h-full w-[4px] bg-[#AC9FFF]">
                <div className="min-h-full w-[4px] bg-[#FFFFFF14]"></div>
              </div>
              <div>
                <p className="uppercase font-futura-medium font-medium text-[#AC9FFF] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                  Revenue sharing
                </p>
                <p className="mt-[7px] font-inter font-light text-[#D4D4D4] text-[14px] md:text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                  Participate in our transparent revenue-sharing model and earn
                  rewards based on your contribution to the network. Epsilon AI
                  incentivizes active participation and collaboration, ensuring
                  everyone shares in the platform's success.
                </p>
              </div>
            </div>
            <div className="flex items-stretch gap-x-[15px] md:gap-x-[20px] 2xl:gap-x-[30px]">
              <div className="min-h-full w-[4px] bg-[#ffffff]">
                <div className="min-h-full w-[4px] bg-[#FFFFFF14]"></div>
              </div>
              <div>
                <p className="uppercase font-futura-medium font-medium text-[#ffffff] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                  Revenue sharing
                </p>
                <p className="mt-[7px] font-inter font-light text-[#D4D4D4] text-[14px] md:text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                  Participate in our transparent revenue-sharing model and earn
                  rewards based on your contribution to the network. Epsilon AI
                  incentivizes active participation and collaboration, ensuring
                  everyone shares in the platform's success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 flex justify-end relative"
          style={{ zIndex: 2 }}
        >
          <img
            src={about}
            alt="about"
            className="w-[100%] md:w-[80%] lg:w-[100%] 2xl:w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
