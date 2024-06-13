import React from "react";
import Hero from "components/presentation/Hero.jsx";
import Navbar from "components/presentation/Navbar";
import WhoWe from "components/presentation/WhoWe";
import Offering from "components/presentation/Offering";
import About from "components/presentation/About";
import Joining from "components/presentation/Joining";
import leftEllipse from "../assets/images/hero-left-ellipse2.png";
import rightEllipse from "../assets/images/hero-right-ellipse2.png";
import mainLeft from "../assets/images/main-left-cloud.png";
import mainRight from "../assets/images/main-right-cloud.png";
import mainLeft2 from "../assets/images/main-left-cloud1.png";
import Tokenomics from "components/presentation/Tokenomics";
import Roadmap from "components/presentation/Roadmap";
import Footer from "components/presentation/Footer";
import Faq from "components/presentation/FAQ";

const Home = () => {
  return (
    <div className="App">
      <div className="bg-hero relative overflow-hidden">
        <div className="absolute -left-[0%] -top-[0%]">
          <img
            src={leftEllipse}
            alt="circle"
            className="rounnded-full w-full"
          />
        </div>
        <div className="absolute -right-[0%] -top-[0%]">
          <img
            src={rightEllipse}
            alt="circle"
            className="rounnded-full w-full"
          />
        </div>
        <Navbar />
        <Hero />
      </div>
      <WhoWe />
      <div className="relative">
        <div className="absolute -left-[5%] -top-[0%] lg:-top-[10%]">
          <img src={mainLeft} alt="circle" className="w-full" />
        </div>
        <Offering />
        <About />
        <div className="relative">
          <div className="absolute -right-[2%] -top-[5%]">
            <img src={mainRight} alt="circle" className="w-full" />
          </div>
          <Roadmap />
          <div className="relative">
            <div className="absolute -left-[0%] -top-[0%]">
              <img src={mainLeft2} alt="circle" className="w-full" />
            </div>
            <Tokenomics />
            <Joining />
            <Faq />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
