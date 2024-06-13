import React, { useEffect } from "react";
// import logo from "../../assets/images/logo.png";

const Navbar = () => {
  // eslint-disable-next-line
  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 0) {
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

  return (
    <div>
      <header className="w-full" style={{ zIndex: 9 }}>
        <div className="mx-auto homepage-container homepage-container-resp text-white px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] overflow-hidden">
          <a href="/">
            {/* <img
              src={logo}
              alt="logo"
              className="w-[120px] h-[50px] lg:w-[150px] lg:h-[70px] 2xl:w-[200px] 2xl:h-[82px]"
            /> */}
            <p className="uppercase font-futura-bold font-bold text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
              LOGO
            </p>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
