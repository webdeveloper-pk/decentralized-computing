import React from "react";
import Hero from "components/presentation/Hero.jsx";
import Navbar from "components/presentation/Navbar";
import WhoWe from "components/presentation/WhoWe";
import Offering from "components/presentation/Offering";
import About from "components/presentation/About";
import Joining from "components/presentation/Joining";
import leftEllipse from "../assets/images/hero-left-ellipse.png";
import rightEllipse from "../assets/images/hero-right-ellipse.png";
import Tokenomics from "components/presentation/Tokenomics";
import Roadmap from "components/presentation/Roadmap";

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
      <Offering />
      <About />
      <Roadmap />
      <Tokenomics />
      <Joining />
    </div>
  );
};

export default Home;
