import { useEffect, useRef } from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
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
import Footer from "components/presentation/Footer";
import Faq from "components/presentation/FAQ";

const Home = () => {
  const canvasRef: any = useRef(null);

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 128, // Resolution of the simulation grid
      DYE_RESOLUTION: 1024, // Resolution of the dye grid
      CAPTURE_RESOLUTION: 512, // Resolution of captured frames
      DENSITY_DISSIPATION: 1, // Rate at which density dissipates
      VELOCITY_DISSIPATION: 0.2, // Rate at which velocity dissipates
      PRESSURE: 0.8, // Pressure value used in the simulation
      PRESSURE_ITERATIONS: 20, // Number of pressure iterations
      CURL: 30, // Curl value used in the simulation
      INITIAL: true, // Enables splats on initial load
      SPLAT_AMOUNT: 5, // Number of initial splats (Random number between n and n * 5)
      SPLAT_RADIUS: 0.25, // Radius of the splats
      SPLAT_FORCE: 6000, // Force applied by the splats
      SPLAT_KEY: "Space", // Keyboard key to spawn new splats (empty to disable)
      SHADING: true, // Enables shading in the visualization
      COLORFUL: true, // Enables rapid changing of colors
      COLOR_UPDATE_SPEED: 10, // Speed of color update
      COLOR_PALETTE: [], // Custom color palette (empty by default, uses hex colors)
      HOVER: true, // Enables interaction on hover
      BACK_COLOR: "#0d0d11", // Background color of the canvas
      TRANSPARENT: false, // Makes the canvas transparent if true
      BRIGHTNESS: 0.1, // Color brightness (Recommend lower than 1.0 if BLOOM is true)
      BLOOM: true, // Enables bloom effect
      BLOOM_ITERATIONS: 8, // Number of bloom effect iterations
      BLOOM_RESOLUTION: 256, // Resolution of the bloom effect
      BLOOM_INTENSITY: 0.8, // Intensity of the bloom effect
      BLOOM_THRESHOLD: 0.6, // Threshold for the bloom effect
      BLOOM_SOFT_KNEE: 0.7, // Soft knee value for the bloom effect
      SUNRAYS: true, // Enables sunrays effect
      SUNRAYS_RESOLUTION: 196, // Resolution of the sunrays effect
      SUNRAYS_WEIGHT: 1.0, // Weight of the sunrays effect
    });
  }, []);

  return (
    <div className="App">
      <div className="bg-hero relative overflow-hidden">
        <div className="absolute top-0 left-0">
          <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100vh", zIndex: 9999 }}
          />
        </div>
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
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
