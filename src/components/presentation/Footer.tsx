import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto homepage-container homepage-container-resp px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] overflow-hidden">
      <div className="gap-y-[35px] border-t border-b border-[#242424] py-[30px] lg:py-[47px] flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="lg:mt-2 uppercase font-futura-bold font-bold text-white text-[18px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px]">
            LOGO
          </p>
        </div>
        <div className="flex w-full lg:justify-center lg:gap-x-[100px] xl:gap-x-[150px] 2xl:gap-x-[200px]">
          <ul className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-[25px] lg:gap-[30px]">
            <li>
              <a
                href="#"
                className="text-[#D4D4D4] hover:text-[#AC9FFF] font-inter font-light text-[15px] md:text-[16px] 2xl:text-[18px]"
              >
                Rent a CPU
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D4D4D4] hover:text-[#AC9FFF] font-inter font-light text-[15px] md:text-[16px] 2xl:text-[18px]"
              >
                Rent a GPU
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D4D4D4] hover:text-[#AC9FFF] font-inter font-light text-[15px] md:text-[16px] 2xl:text-[18px]"
              >
                Stake
              </a>
            </li>
          </ul>
          <ul className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-[25px] lg:gap-[30px]">
            <li>
              <a
                href="#"
                className="text-[#D4D4D4] hover:text-[#AC9FFF] font-inter font-light text-[15px] md:text-[16px] 2xl:text-[18px]"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#D4D4D4] hover:text-[#AC9FFF] font-inter font-light text-[15px] md:text-[16px] 2xl:text-[18px]"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#D4D4D4] hover:text-[#AC9FFF] font-inter font-light text-[15px] md:text-[16px] 2xl:text-[18px]"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="font-inter font-light text-[15px] md:text-[16px] 2xl:text-[18px] text-[#D4D4D4] lg:text-left text-center">
            Social Channels
          </p>
          <div className="mt-[30px] flex items-center gap-[22px]">
            <a href="/" target="_blank">
              <svg
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[31px] h-[32px] lg:w-[36px] lg:h-[37px] text-white hover:text-[#AC9FFF]"
              >
                <path
                  d="M17.7115 30.1597C24.2322 30.1597 29.5182 24.8737 29.5182 18.353C29.5182 11.8324 24.2322 6.54639 17.7115 6.54639C11.1909 6.54639 5.90485 11.8324 5.90485 18.353C5.90485 24.8737 11.1909 30.1597 17.7115 30.1597ZM17.7115 33.1113C9.5607 33.1113 2.95319 26.5038 2.95319 18.353C2.95319 10.2022 9.5607 3.59473 17.7115 3.59473C25.8622 3.59473 32.4698 10.2022 32.4698 18.353C32.4698 26.5038 25.8622 33.1113 17.7115 33.1113ZM13.1219 20.0809L9.43518 18.9302C8.63837 18.6858 8.63363 18.1376 9.6136 17.7437L23.9779 12.1952C24.811 11.8541 25.2847 12.285 25.0147 13.3594L22.568 24.9023C22.3977 25.7235 21.9024 25.919 21.2165 25.54L17.4518 22.7544L15.6972 24.4478C15.5168 24.6218 15.3701 24.7713 15.0938 24.8088C14.8174 24.8461 14.5896 24.7643 14.4239 24.3061L13.1405 20.0691L13.1219 20.0809Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="/" target="_blank">
              <svg
                width="45"
                height="33"
                viewBox="0 0 45 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[50px] h-[30px] lg:w-[55px] lg:h-[33px] text-white hover:text-[#AC9FFF]"
              >
                <g clip-path="url(#clip0_0_498)">
                  <path
                    d="M20.3043 26.8166C20.559 26.8169 20.808 26.8928 21.0197 27.0346C21.2313 27.1765 21.3961 27.3779 21.4933 27.6134C21.5905 27.8489 21.6156 28.108 21.5656 28.3578C21.5155 28.6076 21.3925 28.837 21.2121 29.0169C21.0316 29.1968 20.8019 29.3191 20.5519 29.3684C20.302 29.4177 20.043 29.3918 19.8078 29.2939C19.5725 29.1961 19.3716 29.0306 19.2304 28.8185C19.0892 28.6065 19.0141 28.3573 19.0145 28.1025C19.0151 27.761 19.1513 27.4337 19.3932 27.1925C19.635 26.9514 19.9627 26.8162 20.3043 26.8166ZM40.4976 18.854C40.2428 18.8539 39.9938 18.7783 39.7821 18.6366C39.5703 18.495 39.4053 18.2938 39.3079 18.0584C39.2105 17.8229 39.1851 17.5639 39.2349 17.3141C39.2847 17.0643 39.4075 16.8348 39.5877 16.6547C39.768 16.4747 39.9975 16.3521 40.2474 16.3025C40.4973 16.2529 40.7563 16.2785 40.9916 16.3761C41.2269 16.4737 41.428 16.6389 41.5695 16.8508C41.7109 17.0627 41.7864 17.3117 41.7862 17.5665C41.7859 17.908 41.65 18.2354 41.4084 18.4768C41.1667 18.7181 40.8391 18.8536 40.4976 18.8535M40.4976 13.5852C39.8656 13.5835 39.2423 13.7327 38.6795 14.0203C38.1167 14.308 37.6307 14.7257 37.2618 15.239C36.8929 15.7522 36.6518 16.346 36.5586 16.9711C36.4654 17.5963 36.5226 18.2346 36.7257 18.8331L23.5723 25.8368C23.1783 25.266 22.6419 24.8082 22.0162 24.509C21.3905 24.2098 20.6974 24.0795 20.0058 24.1312C19.3142 24.1829 18.6481 24.4147 18.0738 24.8036C17.4996 25.1924 17.0371 25.7249 16.7324 26.3479L4.9176 20.1163C3.66798 19.4601 2.73378 17.4049 2.8327 15.5332C2.88435 14.5567 3.22122 13.7984 3.73612 13.5055C4.06199 13.322 4.4538 13.3368 4.87144 13.555L4.94837 13.5967C8.08065 15.2453 18.3276 20.6438 18.7601 20.8433C19.425 21.1527 19.7949 21.2774 20.9307 20.7389L42.1132 9.72258C42.4248 9.60553 42.7875 9.30714 42.7875 8.85433C42.7875 8.22788 42.139 7.98059 42.1374 7.98059C40.9317 7.40359 39.0798 6.53754 37.2741 5.69128C33.4104 3.88334 29.0345 1.83527 27.1112 0.827992C25.4516 -0.0402556 24.1163 0.69226 23.8784 0.838983L23.4168 1.06758C14.7673 5.34508 3.19044 11.0783 2.53101 11.4794C1.35338 12.1976 0.622517 13.628 0.526899 15.403C0.380726 18.2182 1.81499 21.1549 3.86801 22.2297L16.3642 28.674C16.5079 29.6642 17.0193 30.564 17.7966 31.1942C18.5739 31.8243 19.5601 32.1385 20.5586 32.0743C21.5572 32.01 22.4949 31.572 23.1851 30.8475C23.8752 30.123 24.2671 29.1651 24.2828 28.1646L38.0467 20.7043C38.5466 21.0943 39.1324 21.3593 39.7554 21.4772C40.3784 21.5951 41.0206 21.5626 41.6284 21.3822C42.2363 21.2018 42.7923 20.8789 43.2501 20.4403C43.7079 20.0016 44.0544 19.46 44.2606 18.8604C44.4669 18.2608 44.5269 17.6207 44.4358 16.9932C44.3447 16.3657 44.105 15.7691 43.7368 15.253C43.3685 14.7368 42.8823 14.3161 42.3186 14.0258C41.7549 13.7356 41.13 13.5841 40.496 13.5841"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_498">
                    <rect
                      width="43.9613"
                      height="31.674"
                      fill="white"
                      transform="translate(0.518738 0.410645)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="/" target="_blank">
              <svg
                width="36"
                height="37"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[31px] h-[32px] lg:w-[36px] lg:h-[37px] text-white hover:text-[#AC9FFF]"
              >
                <g clip-path="url(#clip0_0_495)">
                  <path
                    d="M12.3859 3.59424H2.05475L14.2468 19.8503L2.71882 33.1117H6.62994L16.0583 22.2656L24.1929 33.1118H34.5241L21.8193 16.1721L32.7532 3.59424H28.8421L20.0078 13.7568L12.3859 3.59424ZM25.6688 30.1601L7.95827 6.546H10.91L28.6206 30.1601H25.6688Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_495">
                    <rect
                      width="35.4211"
                      height="35.4211"
                      fill="white"
                      transform="translate(0.578857 0.642578)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="py-[20px]">
        <p className="font-montserrat font-medium text-[14px] md:text-[15px] text-white text-center">
          @ Slilent Cash, INC
        </p>
      </div>
    </div>
  );
};

export default Footer;
