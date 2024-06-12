import React from "react";
import offering1 from "../../assets/images/offering1.png";
import offering2 from "../../assets/images/offering2.png";
import offering3 from "../../assets/images/offering3.png";
import offering4 from "../../assets/images/offering4.png";
import ellipse from "../../assets/images/offering-ellipse.png";

const Offering = () => {
  return (
    <div className="relative">
      <div className="absolute right-[0%] -top-[20%]">
        <img src={ellipse} alt="ellipse" className="w-[100%]" />
      </div>
      <div className="w-full mx-auto homepage-container homepage-container-resp px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] py-[50px] lg:py-[70px] 2xl:py-[90px]">
        <p className="gradient-text uppercase text-center font-futura-medium font-medium text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
          What we Offer & What excites us?
        </p>
        <div className="mt-[100px] lg:mt-[150px] w-full grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] gap-x-[30px] 2xl:gap-x-[40px] text-white">
          <div className="flex flex-col md:flex-row md:items-center lg:items-start 2xl:items-center gap-[25px] py-[15px] lg:py-[25px] xl:py-[15px] bg-[#13131C] offering-card-even lg:flex-col xl:flex-row pl-[15px] pr-[15px] lg:pl-[25px] lg:pr-[25px] 2xl:pl-[15px] 2xl:pr-[15px] rounded-[20px] 2xl:rounded-[38px]">
            <img
              src={offering1}
              alt="offering"
              className="w-[50%] md:w-[40%] lg:w-[35%] xl:w-[40%] 2xl:w-[80%] rounded-[20px] 2xl:rounded-[38px]"
            />
            <div>
              <p className="uppercase font-futura-bold font-bold text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px]">
                GPU rental
              </p>
              <p className="mt-[11px] font-inter font-light text-[#D4D4D4] text-[14px] md:text-[15px] 2xl:text-[16px]">
                Unlock the power of high-performance GPUs for intensive
                computational tasks. With Epsilon AI's GPU rental service,
                handling rendering, simulations, and AI model training becomes a
                breeze.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-col xl:flex-row-reverse 2xl:flex-row-reverse md:items-center lg:items-start xl:items-center gap-[25px] py-[15px] lg:py-[25px] xl:py-[15px] bg-[#19191E] offering-card-odd md:flex-row-reverse pl-[25px] pr-[15px] rounded-tr-[80px] lg:rounded-tr-[100px] 2xl:rounded-tr-[160px] rounded-[20px] lg:rounded-[38px]">
            <img
              src={offering2}
              alt="offering"
              className="w-[50%] md:w-[40%] lg:w-[35%] xl:w-[40%] 2xl:w-[80%] rounded-tr-[80px] 2xl:rounded-tr-[160px] rounded-[20px] lg:rounded-[38px]"
            />
            <div>
              <p className="uppercase font-futura-bold font-bold text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px]">
                CPU rental
              </p>
              <p className="mt-[11px] font-inter font-light text-[#D4D4D4] text-[14px] md:text-[15px] 2xl:text-[16px]">
                Harness cutting-edge CPUs for data analysis, software
                development, and CPU-intensive applications. Epsilon AI's CPU
                rental service ensures you have the processing power you need at
                your fingertips.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:items-center lg:flex-col-reverse xl:flex-row lg:items-start xl:items-center gap-[25px] py-[15px] lg:py-[25px] xl:py-[15px] bg-[#13131C] offering-card-even md:flex-row pl-[15px] pr-[15px] lg:pl-[25px] lg:pr-[25px] 2xl:pl-[15px] 2xl:pr-[15px] rounded-bl-[80px] lg:rounded-bl-[100px] 2xl:rounded-bl-[160px] rounded-[20px] lg:rounded-[38px]">
            <img
              src={offering3}
              alt="offering"
              className="w-[50%] md:w-[40%] lg:w-[35%] xl:w-[40%] 2xl:w-[80%] rounded-bl-[80px] 2xl:rounded-bl-[160px] rounded-[20px] lg:rounded-[38px]"
            />
            <div>
              <p className="uppercase font-futura-medium font-bold text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px]">
                Staking
              </p>
              <p className="mt-[11px] font-inter font-light text-[#D4D4D4] text-[14px] md:text-[15px] 2xl:text-[16px]">
                Secure the Epsilon AI network and earn incentives through our
                staking program. By staking your assets, you contribute to the
                platform's stability and growth while reaping the rewards of
                your participation.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:items-center lg:flex-col xl:flex-row-reverse lg:items-start xl:items-center gap-[25px] py-[15px] lg:py-[25px] xl:py-[15px] bg-[#19191E] offering-card-odd md:flex-row-reverse pl-[25px] pr-[15px] rounded-[20px] 2xl:rounded-[38px]">
            <img
              src={offering4}
              alt="offering"
              className="w-[50%] md:w-[40%] lg:w-[35%] xl:w-[40%] 2xl:w-[80%] rounded-[20px] lg:rounded-[38px]"
            />
            <div>
              <p className="uppercase font-futura-bold font-bold text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px]">
                Cloud Computing with One-Click
              </p>
              <p className="mt-[11px] font-inter font-light text-[#D4D4D4] text-[14px] md:text-[15px] 2xl:text-[16px]">
                Simplify your cloud computing needs with Epsilon AI's one-click
                virtual machine (VM) solutions. Our pre-configured VMs are ready
                to deploy instantly, reducing setup time and allowing you to
                focus on your core tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offering;
