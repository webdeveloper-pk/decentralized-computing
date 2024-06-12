import React from "react";
import phase1 from "../../assets/images/phase1.png";
import phase2 from "../../assets/images/phase2.png";
import phase3 from "../../assets/images/phase3.png";
import phase4 from "../../assets/images/phase4.png";
import phase1Line from "../../assets/images/phase1-line.png";
import phase2Line from "../../assets/images/phase2-line.png";
import phase3Line from "../../assets/images/phase3-line.png";
import phase4Line from "../../assets/images/phase4-line.png";
// import phaseTop from "../../assets/images/phase-top1.png";

const Roadmap = () => {
  return (
    <div className="pb-[50px] 2xl:pb-[50px] pt-[50px] md:pt-[70px] lg:pt-[70px] 2xl:pt-[90px] relative">
      <p className="gradient-text uppercase text-center font-futura-medium font-medium text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
        Roadmap
      </p>
      <div className="w-full mx-auto homepage-container homepage-container-resp text-white px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px]">
        {/* phase 1 */}
        <div className="mt-[50px] flex flex-col md:flex-row items-start md:items-center gap-[15px] md:gap-[10px] lg:gap-[15px] xl:gap-[10px] 2xl:gap-[15px]">
          <p className="hidden md:block font-montserrat font-semibold text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] tracking-[1px] uppercase">
            PHASE:
          </p>
          <div className="flex items-center justify-start md:items-center gap-[15px] md:gap-[10px] lg:gap-[15px] xl:gap-[10px] 2xl:gap-[15px]">
            <div className="-ml-4 md:ml-0 relative min-w-[100px] lg:min-w-[100px] 2xl:min-w-[140px] max-w-[100px] lg:max-w-[100px] 2xl:max-w-[140px]">
              <div className="min-w-[100px] min-h-[100px] lg:min-w-[100px] lg:min-h-[100px] 2xl:min-w-[140px] 2xl:min-h-[150px] max-w-[100px] max-h-[100px] xl:max-w-[80px] xl:max-h-[80px] 2xl:max-w-[140px] 2xl:max-h-[150px] flex justify-center items-center">
                <img
                  src={phase1}
                  alt="phase"
                  className="min-w-[100px] min-h-[100px] lg:min-w-[100px] lg:min-h-[100px] 2xl:min-w-[140px] 2xl:min-h-[150px] max-w-[100px] max-h-[100px] lg:max-w-[100px] lg:max-h-[100px] xl:max-w-[80px] xl:max-h-[80px] 2xl:max-w-[140px] 2xl:max-h-[150px]"
                  style={{ zIndex: 2 }}
                />
              </div>
              <img
                src={phase1Line}
                alt="phase"
                className="absolute left-[50%] w-[2px] top-[85%]"
                style={{ zIndex: 1 }}
              />
            </div>
            <p className="font-futura-light font-light text-[#AC9FFF] text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] md:tracking-[1px]">
              Phase 1: Foundation (Q1 - Q2 <br /> 2024)
            </p>
          </div>
        </div>
        <div className="pl-[16%] md:pl-[23%] lg:pl-[20%] xl:pl-[17%] 2xl:pl-[15%] w-full md:w-[100%] lg:w-[90%] xl:w-[60%] 2xl:w-[70%] mt-[30px] md:mt-[20px] lg:mt-[10px] xl:mt-[20px] 2xl:mt-[20px]">
          <ul className="list-disc ml-[10px] font-inter text-[14px] md:text-[14px] 2xl:text-[15px]">
            <li>
              <span className="font-bold mr-2">
                Establishment of core team:
              </span>
              Assemble a dedicated team of developers, researchers, and industry
              experts to drive the vision of Epsilon AI.
            </li>
            <li>
              <span className="font-extrabold mr-2">
                Platform conceptualization:
              </span>
              Define the core features and functionalities of the Epsilon AI
              platform, including AI-powered computing, GPU/CPU rental, and
              revenue-sharing mechanisms.
            </li>
            <li>
              <span className="font-extrabold mr-2">Whitepaper release:</span>
              Publish a comprehensive whitepaper outlining the technical
              specifications, use cases, and tokenomics of Epsilon AI.
            </li>
            <li>
              <span className="font-extrabold mr-2">Community building:</span>
              Engage with the community through social media, forums, and events
              to raise awareness and gather feedback on the project.
            </li>
            <li>
              <span className="font-extrabold mr-2">
                Smart contract development:
              </span>
              Develop smart contracts to facilitate trading, staking, and
              revenue sharing on the Epsilon AI network.
            </li>
            <li>
              <span className="font-extrabold mr-2">
                Launch of Epsilon AI token:
              </span>
              Launch of our main token on the Ethereum blockchain.
            </li>
          </ul>
        </div>
        {/* phase 2 */}
        <div className="mt-[50px] lg:mt-[70px]">
          {/* <div className="hidden xl:block xl:ml-[12.5%] xl:-mb-[15px] top-line-wrapper2">
            <img src={phaseTop} alt="" className="top-line-image2 w-[19.1%]" />
          </div> */}
          <div className="pl-0 xl:pl-[17%] 2xl:pl-[15%] flex flex-col md:flex-row items-start md:items-center gap-[15px] md:gap-[10px] lg:gap-[15px] xl:gap-[10px] 2xl:gap-[15px]">
            <p className="hidden md:block font-montserrat font-semibold text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] tracking-[1px] uppercase">
              PHASE:
            </p>
            <div className="flex items-center justify-start md:items-center gap-[15px] md:gap-[10px] lg:gap-[15px] xl:gap-[10px] 2xl:gap-[15px]">
              <div className="-ml-4 md:ml-0 relative min-w-[100px] lg:min-w-[100px] 2xl:min-w-[140px] max-w-[100px] lg:max-w-[100px] 2xl:max-w-[140px]">
                <div className="min-w-[100px] min-h-[100px] lg:min-w-[100px] lg:min-h-[100px] 2xl:min-w-[140px] 2xl:min-h-[150px] max-w-[100px] max-h-[100px] lg:max-w-[100px] lg:max-h-[100px] 2xl:max-w-[140px] 2xl:max-h-[150px] flex justify-center items-center">
                  <img
                    src={phase2}
                    alt="phase"
                    className="min-w-[100px] min-h-[100px] lg:min-w-[100px] lg:min-h-[100px] 2xl:min-w-[140px] 2xl:min-h-[150px] max-w-[100px] max-h-[100px] lg:max-w-[100px] lg:max-h-[100px] 2xl:max-w-[140px] 2xl:max-h-[150px]"
                    style={{ zIndex: 2 }}
                  />
                </div>
                <img
                  src={phase2Line}
                  alt="phase"
                  className="absolute left-[50%] w-[2px] top-[85%]"
                  style={{ zIndex: 1 }}
                />
              </div>
              <p className="font-futura-light font-light text-white text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] md:tracking-[1px]">
                Phase 2: Development (Q3 - Q4 <br /> 2024)
              </p>
            </div>
          </div>
        </div>
        <div className="pl-[16%] md:pl-[23%] lg:pl-[20%] xl:pl-[34%] 2xl:pl-[30%] w-full md:w-[100%] lg:w-[90%] xl:w-[75%] 2xl:w-[80%] mt-[30px] md:mt-[20px] lg:mt-[10px] xl:mt-[20px] 2xl:mt-[20px]">
          <ul className="list-disc ml-[10px] font-inter text-[14px] md:text-[14px] 2xl:text-[15px]">
            <li>
              <span className="font-bold mr-2">Platform development:</span>
              Begin development of the Epsilon AI platform, focusing on building
              the infrastructure for AI-powered computing, GPU/CPU rental, and
              revenue-sharing mechanisms
            </li>
            <li>
              <span className="font-extrabold mr-2">
                Testing and optimization:
              </span>
              Conduct extensive testing and optimization to ensure the
              stability, security, and scalability of the platform.
            </li>
            <li>
              <span className="font-extrabold mr-2">
                Partnership expansion:
              </span>
              Forge strategic partnerships with hardware providers, software
              developers, and industry leaders to enhance the functionality and
              reach of the Epsilon AI platform.
            </li>
          </ul>
        </div>
        {/* phase 3 */}
        <div className="mt-[50px] lg:mt-[70px]">
          {/* <div className="hidden xl:block xl:pl-[29.4%] xl:-mb-[15px] top-line-wrapper3">
            <img src={phaseTop} alt="" className="top-line-image3 w-[23.9%]" />
          </div> */}
          <div className="pl-0 xl:pl-[34%] 2xl:pl-[30%] flex flex-col md:flex-row items-start md:items-center gap-[15px] md:gap-[10px] lg:gap-[15px] xl:gap-[10px] 2xl:gap-[15px]">
            <p className="hidden md:block font-montserrat font-semibold text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] tracking-[1px] uppercase">
              PHASE:
            </p>
            <div className="flex items-center justify-start md:items-center gap-[15px] md:gap-[10px] lg:gap-[15px] xl:gap-[10px] 2xl:gap-[15px]">
              <div className="-ml-4 md:ml-0 relative min-w-[100px] lg:min-w-[100px] 2xl:min-w-[140px] max-w-[100px] lg:max-w-[100px] 2xl:max-w-[140px]">
                <div className="min-w-[100px] min-h-[100px] lg:min-w-[100px] lg:min-h-[100px] 2xl:min-w-[140px] 2xl:min-h-[150px] max-w-[100px] max-h-[100px] lg:max-w-[100px] lg:max-h-[100px] 2xl:max-w-[140px] 2xl:max-h-[150px] flex justify-center items-center">
                  <img
                    src={phase3}
                    alt="phase"
                    className="min-w-[100px] min-h-[100px] lg:min-w-[100px] lg:min-h-[100px] 2xl:min-w-[140px] 2xl:min-h-[150px] max-w-[100px] max-h-[100px] lg:max-w-[100px] lg:max-h-[100px] 2xl:max-w-[140px] 2xl:max-h-[150px]"
                    style={{ zIndex: 2 }}
                  />
                </div>
                <img
                  src={phase3Line}
                  alt="phase"
                  className="absolute left-[50%] w-[2px] top-[85%]"
                  style={{ zIndex: 1 }}
                />
              </div>
              <p className="font-futura-light font-light text-[#AC9FFF] text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] md:tracking-[1px]">
                Phase 3: Launch (Q1 - Q2 <br /> 2025)
              </p>
            </div>
          </div>
        </div>
        <div className="pl-[16%] md:pl-[23%] lg:pl-[20%] xl:pl-[51%] 2xl:pl-[45%] w-full md:w-[100%] lg:w-[90%] xl:w-[90%] 2xl:w-[90%] mt-[30px] md:mt-[20px] lg:mt-[10px] xl:mt-[20px] 2xl:mt-[20px]">
          <ul className="list-disc ml-[10px] font-inter text-[14px] md:text-[14px] 2xl:text-[15px]">
            <li>
              <span className="font-bold mr-2">Platform launch:</span>
              Officially launch the Epsilon AI platform to the public, allowing
              users to access AI-powered computing, GPU/CPU rental, and
              revenue-sharing features.
            </li>
            <li>
              <span className="font-extrabold mr-2">Token distribution:</span>
              Distribute Epsilon AI tokens to early adopters, investors, and
              contributors according to the predetermined allocation plan.
            </li>
            <li>
              <span className="font-extrabold mr-2">
                Marketing and adoption:
              </span>
              Launch targeted marketing campaigns to attract users and
              developers to the Epsilon AI platform, highlighting its unique
              features and benefits.
            </li>
            <li>
              <span className="font-extrabold mr-2">Community engagement:</span>
              Host events, webinars, and AMA sessions to engage with the
              community, gather feedback, and address questions or concerns.
            </li>
          </ul>
        </div>
        {/* phase 4 */}
        <div className="mt-[50px] lg:mt-[70px]">
          {/* <div className="hidden xl:block xl:pl-[46.5%] xl:-mb-[15px] top-line-wrapper4">
            <img src={phaseTop} alt="" className="top-line-image4 w-[31.5%]" />
          </div> */}
          <div className="pl-0 xl:pl-[51%] 2xl:pl-[45%] flex flex-col md:flex-row items-start md:items-center gap-[15px] md:gap-[10px] lg:gap-[15px] xl:gap-[10px] 2xl:gap-[15px]">
            <p className="hidden md:block font-montserrat font-semibold text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] tracking-[1px] uppercase">
              PHASE:
            </p>
            <div className="flex items-center justify-start md:items-center gap-[15px] md:gap-[10px] lg:gap-[15px] xl:gap-[10px] 2xl:gap-[15px]">
              <div className="-ml-4 md:ml-0 relative min-w-[100px] lg:min-w-[100px] 2xl:min-w-[140px] max-w-[100px] lg:max-w-[100px] 2xl:max-w-[140px]">
                <div className="min-w-[100px] min-h-[100px] lg:min-w-[100px] lg:min-h-[100px] 2xl:min-w-[140px] 2xl:min-h-[150px] max-w-[100px] max-h-[100px] lg:max-w-[100px] lg:max-h-[100px] 2xl:max-w-[140px] 2xl:max-h-[150px] flex justify-center items-center">
                  <img
                    src={phase4}
                    alt="phase"
                    className="min-w-[100px] min-h-[100px] lg:min-w-[100px] lg:min-h-[100px] 2xl:min-w-[140px] 2xl:min-h-[150px] max-w-[100px] max-h-[100px] lg:max-w-[100px] lg:max-h-[100px] 2xl:max-w-[140px] 2xl:max-h-[150px]"
                    style={{ zIndex: 2 }}
                  />
                </div>
                <img
                  src={phase4Line}
                  alt="phase"
                  className="absolute left-[50%] w-[2px] top-[85%]"
                  style={{ zIndex: 1 }}
                />
              </div>
              <p className="font-futura-light font-light text-white text-[18px] md:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] md:tracking-[1px]">
                Phase 4: Expansion (Q3 - Q4 <br /> 2025)
              </p>
            </div>
          </div>
        </div>
        <div className="pl-[16%] md:pl-[23%] lg:pl-[20%] xl:pl-[67%] 2xl:pl-[60%] w-full md:w-[100%] lg:w-[90%] xl:w-[100%] 2xl:w-[100%] mt-[30px] md:mt-[20px] lg:mt-[10px] xl:mt-[20px] 2xl:mt-[20px]">
          <ul className="list-disc ml-[10px] font-inter text-[14px] md:text-[14px] 2xl:text-[15px]">
            <li>
              <span className="font-bold mr-2">Feature enhancement:</span>
              Continuously enhance and expand the features and functionalities
              of the Epsilon AI platform based on user feedback and market
              demands
            </li>
            <li>
              <span className="font-extrabold mr-2">Global expansion: </span>
              Expand the reach of Epsilon AI to new markets and regions,
              fostering adoption and usage among diverse user demographics.
            </li>
            <li>
              <span className="font-extrabold mr-2">Ecosystem growth:</span>
              Foster the growth of the Epsilon AI ecosystem by encouraging the
              development of decentralized applications (DApps) and partnerships
              with third-party developers.
            </li>
            <li>
              <span className="font-extrabold mr-2">
                Research and innovation:
              </span>
              Invest in research and development initiatives to explore new
              technologies, improve existing features, and maintain Epsilon AI's
              position as a leader in the decentralized computing space.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
