import React from "react";
import { Collapse } from "antd";
import "../../assets/styles/faqCss.css";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div className="faq-bg">
      <div className="w-full mx-auto homepage-container homepage-container-resp px-[20px] md:px-[50px] lg:px-[80px] xl:px-[90px] 2xl:px-[200px] pt-[50px] lg:pt-[50px] pb-[30px] lg:pb-[40px] overflow-hidden">
        <div className="flex flex-col items-center">
          <p className="gradient-text uppercase text-center font-futura-medium font-medium text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
            FAQS
          </p>
        </div>
        <div className="mt-[40px] lg:mt-[80px]">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1200"
            // data-aos-offset="-100"
          >
            <Collapse
              ghost
              accordion
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <div className="pr-0 md:pr-2 lg:pr-6">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[16px] h-[16px] 2xl:w-[16px] 2xl:h-[16px]"
                    >
                      <path
                        d="M5 15L12 8L19 15"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="pr-0 md:pr-2 lg:pr-6">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[16px] h-[16px] 2xl:w-[16px] 2xl:h-[16px]"
                    >
                      <path
                        d="M19 9L12 16L5 9"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                )
              }
            >
              <Panel header="How do we achieve privacy?" key="1">
                <div className="flex flex-row items-start">
                  <div className="font-inter font-light pb-4 text-[#D4D4D4] text-[12px] md:text-[15px] 2xl:text-[16px]">
                    SilentCash improves transaction privacy by breaking the
                    on-chain link between the sender and receivers address. It
                    uses smart contracts that only accepts a fixed amount of ETH
                    to be deposited that can then be withdrawn by a different
                    address. To preserve privacy a relayer can be used to
                    withdraw to an address with no ETH balance. There is no way
                    to link the withdrawal to the deposit, ensuring absolute
                    privacy.
                  </div>
                </div>
              </Panel>
              <Panel header="What is a Relayer?" key="2">
                <div className="flex flex-row items-start">
                  <div className="font-inter font-light pb-4 text-[#D4D4D4] text-[12px] md:text-[15px] 2xl:text-[16px]">
                    To facilitate a withdrawal to an account lacking the
                    necessary funds for transaction fees, relayers step in.
                    These relayers execute the withdrawal by paying the required
                    gas fees themselves and, in return, receive a portion of the
                    deposit as remuneration. Importantly, relayers are unable to
                    alter any details of the withdrawal, such as the recipient's
                    address. It should also be noted that the original
                    developers of zkSilent have no involvement or influence over
                    the relaying of transactions.
                  </div>
                </div>
              </Panel>
              <Panel header="How can I prove my source funds?" key="3">
                <div className="flex flex-row items-start">
                  <div className="font-inter font-light pb-4 text-[#D4D4D4] text-[12px] md:text-[15px] 2xl:text-[16px]">
                    To facilitate a withdrawal to an account lacking the
                    necessary funds for transaction fees, relayers step in.
                    These relayers execute the withdrawal by paying the required
                    gas fees themselves and, in return, receive a portion of the
                    deposit as remuneration. Importantly, relayers are unable to
                    alter any details of the withdrawal, such as the recipient's
                    address. It should also be noted that the original
                    developers of zkSilent have no involvement or influence over
                    the relaying of transactions.
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
