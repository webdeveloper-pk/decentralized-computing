import React from "react";
import tokenomicsTextLines from "../../assets/images/tokenomics-text-lines.png";
import tokenomics from "../../assets/images/tokenomics.png";
import leftTopM from "../../assets/images/leftTop-m.png";
import rightTop from "../../assets/images/rightTop.png";
import leftBottom from "../../assets/images/leftBottom.png";
import rightBottom from "../../assets/images/rightBotom.png";
import bottom from "../../assets/images/bottom.png";

const Tokenomics = () => {
  return (
    <div className="pt-[50px] md:pt-[50px] lg:pt-[50px] 2xl:pt-[50px] pb-[50px] md:pb-[70px] lg:pb-[70px] 2xl:pb-[80px] relative overflow-hidden">
      <p className="gradient-text uppercase text-center font-futura-medium font-medium text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
        Tokonomics
      </p>
      <div className="absolute center-child w-full">
        <img src={tokenomicsTextLines} alt="text" className="w-full" />
      </div>
      <div className="mt-[50px] lg:pt-[50px] 2xl:pt-[50px] relative ">
        <div className="w-full homepage-container-resp homepage-container px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] mx-auto">
          <div className="px-[20px]">
            <div className="w-full flex justify-center gap-x-[25%] md:gap-x-[15%]">
              <div className="">
                <p className="font-futura-light font-light text-white text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] mb-[5px] md:mb-[10px] xl:mb-[20px] md:tracking-[2px]">
                  Marketing:
                </p>
                <img
                  src={leftTopM}
                  alt="lines"
                  className="block w-[200px] md:w-[350px] lg:w-auto"
                />
                <p className="-mt-[15px] md:-mt-[25px] lg:-mt-[40px] xl:-mt-[45px] w-[70%] md:w-[70%] 2xl:w-full font-futura-light font-light text-[#AC9FFF] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] md:tracking-[1px]">
                  12% (initial 3%, unlocked 1% monthly)
                </p>
              </div>
              <div className="">
                <p className="text-right font-futura-light font-light text-white text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] mb-[5px] md:mb-[10px] xl:mb-[20px] md:tracking-[2px]">
                  CEX Listing:
                </p>
                <img
                  src={rightTop}
                  alt="lines"
                  className="w-[200px] md:w-[350px] lg:w-auto"
                />
                <p className="-mt-[15px] md:-mt-[25px] lg:-mt-[40px] xl:-mt-[45px] text-right font-futura-light font-light text-[#AC9FFF] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] md:tracking-[1px]">
                  4% (5,000,000)
                </p>
              </div>
            </div>
            <div className="-mt-[40px] md:-mt-[30px] lg:-mt-[40px] xl:-mt-[20px] 2xl:-mt-[50px] w-full flex justify-center items-center">
              <div className="w-[250px] h-[260px] md:w-[350px] md:h-[360px] lg:w-[400px] lg:h-[420px] xl:w-[450px] xl:h-[470px] 2xl:w-[530px] 2xl:h-[570px] relative">
                <img
                  src={tokenomics}
                  alt="circle"
                  className="w-[250px] h-[260px] md:w-[350px] md:h-[360px] lg:w-[400px] lg:h-[420px] xl:w-[450px] xl:h-[470px] 2xl:w-[530px] 2xl:h-[570px]"
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1200"
                />
                <div className="center-child">
                  <p
                    className="text-center text-[#AC9FFF] font-futura-light font-light text-[15px] lg:text-[16px] 2xl:text-[24px] md:tracking-[2px]"
                    data-aos="zoom-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="1500"
                  >
                    TOKONOMICS
                  </p>
                  <p
                    className="mt-[7px] text-center text-white font-futura-bold font-bold text-[18px] md:text-[24px] lg:text-[36px] 2xl:text-[54px]"
                    data-aos="zoom-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="1500"
                  >
                    100,000,000
                  </p>
                </div>
              </div>
            </div>
            <div className="-mt-[40px] md:-mt-[30px] lg:-mt-[40px] xl:-mt-[20px] 2xl:-mt-[50px] w-full flex justify-center gap-x-[25%] md:gap-x-[15%]">
              <div className="">
                <p className="font-futura-light font-light text-white text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] -mb-[15px] md:-mb-[25px] lg:-mb-[35px] xl:-mb-[45px] md:tracking-[2px]">
                  Liquidity:
                </p>
                <img
                  src={leftBottom}
                  alt="lines"
                  className="block w-[200px] md:w-[350px] lg:w-auto"
                />
                <p className="mt-[2px] md:mt-[10px] xl:mt-[20px] 2xl:mt-[15px] font-futura-light font-light text-[#FFFFFFA1] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] md:tracking-[1px]">
                  70%
                </p>
              </div>
              <div className="">
                <p className="text-right font-futura-light font-light text-white text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] -mb-[12px] md:-mb-[20px] lg:-mb-[30px] xl:-mb-[45px] 2xl:-mb-[35px] md:tracking-[2px]">
                  Strategic round:
                </p>
                <img
                  src={rightBottom}
                  alt="lines"
                  className="w-[200px] md:w-[350px] lg:w-auto"
                />
                <p className="mt-[2px] md:mt-[10px] xl:mt-[20px] 2xl:mt-[15px] text-right font-futura-light font-light text-[#FFFFFFA1] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] md:tracking-[1px]">
                  10% (50% TGE, rest vested over 2 months)
                </p>
              </div>
            </div>
            <div className="-mt-[0px] md:-mt-[30px] lg:-mt-[40px] xl:-mt-[20px] 2xl:-mt-[50px] w-full flex flex-col justify-center items-center">
              <img src={bottom} alt="lines" className="h-[50px] lg:h-auto" />
              <p className="mt-[5px] font-futura-light font-light text-white text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] md:tracking-[2px]">
                Team:
              </p>
              <p className="mt-[0px] lg:mt-[5px] font-futura-light font-light text-white text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] md:tracking-[1px]">
                4% /locked for 12 months
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
