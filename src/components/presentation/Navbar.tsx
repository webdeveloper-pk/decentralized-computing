import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 10) {
        const header = document.querySelector("header");
        if (header) {
          header.classList.add("shrink");
        }
      } else {
        const header = document.querySelector("header");
        if (header) {
          header.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setNavbar(!navbar);
  };

  const onSidebarClick = () => {
    setNavbar(!navbar);
  };

  return (
    <header className="z-[999] mx-auto homepage-container homepage-container-resp text-white px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] overflow-hidden">
      <div className="mx-auto homepage-container">
        <div className="w-full flex flex-row justify-between items-center gap-x-[10px]">
          <a href="/">
            <img src={logo} alt="logo" className="w-[140px] 2xl:w-[200px]" />
          </a>
          <button
            onClick={toggleSidebar}
            className="focus:outline-none block lg:hidden"
          >
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[29px] h-[29px]"
            >
              <path
                d="M5.80872 20.521H22.073"
                stroke="white"
                stroke-width="2.32347"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.80872 14.7124H22.073"
                stroke="white"
                stroke-width="2.32347"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.80872 8.90356H22.073"
                stroke="white"
                stroke-width="2.32347"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <nav className="hidden shift lg:block">
            <ul className="nav-list flex items-center justify-center gap-x-[0px] xl:gap-x-[20px] 2xl:gap-x-[30px]">
              <li
                className=""
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-duration="900"
              >
                <a
                  href="#Offering"
                  className="text-white font-montserrat font-light text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                >
                  Offering
                </a>
              </li>
              <li
                className=""
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1100"
              >
                <div className="btn-test from-bottom">
                  <a
                    href="#About"
                    className="text-white font-montserrat font-light text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                  >
                    About
                  </a>
                </div>
              </li>
              <li
                className=""
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1300"
              >
                <div className="btn-test from-bottom">
                  <a
                    href="#Roadmap"
                    className="text-white font-montserrat font-light text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                  >
                    Roadmap
                  </a>
                </div>
              </li>
              <li
                className=""
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              >
                <div className="btn-test from-bottom">
                  <a
                    href="#Tokonomics"
                    className="text-white font-montserrat font-light text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                  >
                    Tokonomics
                  </a>
                </div>
              </li>
              <li
                className=""
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1700"
              >
                <div className="btn-test from-bottom">
                  <a
                    href="#Join"
                    className="text-white font-montserrat font-light text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                  >
                    Join
                  </a>
                </div>
              </li>
              <li
                className=""
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1700"
              >
                <div className="btn-test from-bottom">
                  <a
                    href="#Faqs"
                    className="text-white font-montserrat font-light text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                  >
                    Faqs
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div
            className="hidden lg:flex lg:justify-center lg:items-center lg:gap-x-[26px] xl:gap-x-[30px] 2xl:gap-x-[36px]"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1900"
          >
            <button
              className={`py-[11px] px-[20px] lg:py-[11px] lg:px-[30px] custom-btn bg-transparent flex justify-center items-center rounded-tl-[18px] rounded-bl-[18px] rounded-br-[18px] rounded-tr-[33px] cursor-pointer font-montserrat font-medium text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-black uppercase`}
            >
              <span className="custom-btn-inner">BUY NOW</span>
            </button>
          </div>
        </div>
        <div
          className={`${
            navbar ? "active-profile-sidebar" : "not-active-profile-sidebar"
          }`}
        >
          <div
            className="profile-sidebar-inner relative"
            onClick={onSidebarClick}
          >
            <div className="absolute right-[20px] top-[25px] md:right-[45px] md:top-[27px]">
              <button
                onClick={toggleSidebar}
                className="focus:outline-none block lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 29 29"
                  fill="none"
                  className="w-[29px] h-[29px]"
                >
                  <path
                    d="M21.375 13.5L5.625 13.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.375 20.25L5.625 13.5L12.375 6.75"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-y-[30px]">
              <nav className="block lg:hidden shift">
                <ul className="flex flex-col gap-y-[30px] nav-list items-center justify-center lg:gap-x-[10px] xl:gap-x-[20px] 2xl:gap-x-[30px]">
                  <li
                    className=""
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="900"
                  >
                    <a
                      href="#Offering"
                      className="text-white font-montserrat font-light text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                    >
                      Offering
                    </a>
                  </li>
                  <li
                    className=""
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1100"
                  >
                    <div className="btn-test from-bottom">
                      <a
                        href="#About"
                        className="text-white font-montserrat font-light text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                      >
                        About
                      </a>
                    </div>
                  </li>
                  <li
                    className=""
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1300"
                  >
                    <div className="btn-test from-bottom">
                      <a
                        href="#Roadmap"
                        className="text-white font-montserrat font-light text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                      >
                        Roadmap
                      </a>
                    </div>
                  </li>
                  <li
                    className=""
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1500"
                  >
                    <div className="btn-test from-bottom">
                      <a
                        href="#Tokonomics"
                        className="text-white font-montserrat font-light text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                      >
                        Tokonomics
                      </a>
                    </div>
                  </li>
                  <li
                    className=""
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1700"
                  >
                    <div className="btn-test from-bottom">
                      <a
                        href="#Join"
                        className="text-white font-montserrat font-light text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                      >
                        Join
                      </a>
                    </div>
                  </li>
                  <li
                    className=""
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1700"
                  >
                    <div className="btn-test from-bottom">
                      <a
                        href="#Faqs"
                        className="text-white font-montserrat font-light text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]"
                      >
                        Faqs
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div
                className="flex justify-center items-center gap-x-[26px] xl:gap-x-[30px] 2xl:gap-x-[36px]"
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1900"
              >
                <button
                  className={`py-[11px] px-[30px] lg:py-[11px] lg:px-[30px] custom-btn bg-transparent flex justify-center items-center rounded-tl-[18px] rounded-bl-[18px] rounded-br-[18px] rounded-tr-[33px] cursor-pointer font-montserrat font-medium text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-black uppercase`}
                >
                  <span className="custom-btn-inner">BUY NOW</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
