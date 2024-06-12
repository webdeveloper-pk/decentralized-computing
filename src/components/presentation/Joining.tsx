import React from "react";
import joining1 from "../../assets/images/joining1.png";
import joining2 from "../../assets/images/joining2.png";
import joining3 from "../../assets/images/joining3.png";
import joining4 from "../../assets/images/joining4.png";

const joining = () => {
  return (
    <div className="w-full mx-auto homepage-container homepage-container-resp px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] py-[50px] lg:py-[70px] 2xl:py-[90px]">
      <p className="gradient-text uppercase text-center font-futura-medium font-medium text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
        Join Our Community
      </p>
      <div className="mt-[40px] lg:mt-[45px] w-full grid grid-cols-1 lg:grid-cols-2 gap-y-[30px] gap-x-[30px] 2xl:gap-x-[40px] text-white">
        <div className="offering-card-even-border rounded-[20px] 2xl:rounded-[38px]">
          <div className="flex justify-between lg:flex-col xl:flex-row items-center lg:items-start xl:items-center gap-[30px] bg-[#13131C] offering-card-even px-[20px] md:px-[25px] py-[20px] lg:py-[35px] xl:py-[35px] rounded-[20px] 2xl:rounded-[38px] w-full h-full">
            <div className="flex flex-col md:flex-row md:items-center lg:items-center 2xl:items-center gap-[20px] lg:flex-row xl:flex-row">
              <img src={joining1} alt="joining" className="w-[80px] h-[80px]" />
              <div>
                <p className="uppercase font-futura-bold font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[18px] 2xl:text-[24px]">
                  Whitepaper
                </p>
                <p className="mt-[7px] font-inter font-light text-[#D4D4D4] text-[14px] md:text-[15px] 2xl:text-[16px]">
                  Read here.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap joining-read-btn px-[16px] xl:px-[12px] 2xl:px-[16px] py-[12px] flex items-center gap-[10px] rounded-[15px] rounded-tr-[27px] font-futura-light font-light text-[16px] lg:text-[20px] xl:text-[17px] 2xl:text-[25px]">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.91667 24.0834L24.0833 9.91675"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.75 9.91675H24.0833V21.2501"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>READ HERE</span>
            </button>
          </div>
        </div>
        <div className="offering-card-odd-border rounded-[20px] rounded-tr-[80px] lg:rounded-[38px] lg:rounded-tr-[100px] 2xl:rounded-tr-[160px]">
          <div className="flex justify-between lg:flex-col xl:flex-row items-center lg:items-start xl:items-center gap-[30px] px-[20px] md:px-[25px] py-[20px] lg:py-[35px] xl:py-[35px] bg-[#19191E] offering-card-odd rounded-tr-[80px] lg:rounded-tr-[100px] 2xl:rounded-tr-[160px] rounded-[20px] lg:rounded-[38px] w-full h-full">
            <div className="md:flex-row gap-[20px] flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:items-center lg:items-center xl:items-center">
              <img src={joining2} alt="joining" className="w-[80px] h-[80px]" />
              <div>
                <p className="uppercase font-futura-bold font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[18px] 2xl:text-[24px]">
                  Join X Community
                </p>
                <p className="mt-[7px] font-inter font-light text-[#D4D4D4] text-[14px] md:text-[15px] 2xl:text-[16px]">
                  Read here.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap joining-read-btn px-[16px] xl:px-[12px] 2xl:px-[16px] py-[12px] flex items-center gap-[10px] rounded-[15px] rounded-tr-[27px] font-futura-light font-light text-[16px] lg:text-[20px] xl:text-[17px] 2xl:text-[25px]">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.91667 24.0834L24.0833 9.91675"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.75 9.91675H24.0833V21.2501"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>READ HERE</span>
            </button>
          </div>
        </div>
        <div className="offering-card-even-border3 rounded-[20px] rounded-bl-[80px] lg:rounded-[38px] lg:rounded-bl-[100px] 2xl:rounded-bl-[160px]">
          <div className="flex justify-between lg:flex-col xl:flex-row items-center lg:items-start xl:items-center gap-[30px] bg-[#13131C] offering-card-even px-[20px] md:px-[25px] py-[20px] lg:py-[35px] xl:py-[35px] rounded-bl-[80px] lg:rounded-bl-[100px] 2xl:rounded-bl-[160px] rounded-[20px] lg:rounded-[38px] w-full h-full">
            <div className="flex flex-col-reverse md:items-center lg:flex-row xl:flex-row lg:items-center xl:items-center gap-[20px] md:flex-row">
              <img src={joining3} alt="joining" className="w-[80px] h-[80px]" />
              <div>
                <p className="uppercase font-futura-bold font-bold text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] xl:text-[18px]">
                  Join Discord Community
                </p>
                <p className="mt-[7px] font-inter font-light text-[#D4D4D4] text-[14px] md:text-[15px] 2xl:text-[16px]">
                  Read here.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap joining-read-btn px-[16px] xl:px-[12px] 2xl:px-[16px] py-[12px] flex items-center gap-[10px] rounded-[15px] rounded-tr-[27px] font-futura-light font-light text-[16px] lg:text-[20px] xl:text-[17px] 2xl:text-[25px]">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.91667 24.0834L24.0833 9.91675"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.75 9.91675H24.0833V21.2501"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>READ HERE</span>
            </button>
          </div>
        </div>
        <div className="offering-card-odd-border4 rounded-[20px] 2xl:rounded-[38px]">
          <div className="flex justify-between lg:flex-col xl:flex-row items-center lg:items-start xl:items-center gap-[30px] px-[20px] md:px-[25px] py-[20px] lg:py-[35px] xl:py-[35px] bg-[#19191E] offering-card-odd rounded-[20px] 2xl:rounded-[38px] w-full h-full">
            <div className="flex flex-col md:items-center lg:flex-row xl:flex-row lg:items-center xl:items-center gap-[20px] md:flex-row">
              <img src={joining4} alt="joining" className="w-[80px] h-[80px]" />
              <div>
                <p className="uppercase font-futura-bold font-bold text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[24px] xl:text-[18px]">
                  Join Telegram Community
                </p>
                <p className="mt-[7px] font-inter font-light text-[#D4D4D4] text-[14px] md:text-[15px] 2xl:text-[16px]">
                  Read here.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap joining-read-btn px-[16px] xl:px-[12px] 2xl:px-[16px] py-[12px] flex items-center gap-[10px] rounded-[15px] rounded-tr-[27px] font-futura-light font-light text-[16px] lg:text-[20px] xl:text-[17px] 2xl:text-[25px]">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.91667 24.0834L24.0833 9.91675"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.75 9.91675H24.0833V21.2501"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>READ HERE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default joining;
