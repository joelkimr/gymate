import React from "react";
import Image from "next/image";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingCard from "./pricingCards";

import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img3.jpg";

function Pricing() {
  return (
    <>
      <section className="pricing-section relative w-full">
        <div className="container page-padding py-16">
          <Image src={BgText} className="left-0 absolute" alt="bg_img" />
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 md:text-lg uppercase font-bold md:mb-10 lg:text-xs text-4xl md:pt-0 pt-3 lg:pt-0 md:ml-0 ml-3">
              PRICING CHART
            </p>
            <Image
              src={TitleRed}
              alt="text_bg"
              className="md:w-64 w-[30rem] lg:w-44 absolute -top-3 md:ml-0 ml-1"
            />

            <h2 className="md:text-4xl lg:text-4xl font-bold md:mb-4 text-7xl md:mt-0 mt-24">
              Exclusive Pricing Plan
            </h2>
            <p className="text-[#646464] font-medium md:text-lg lg:text-sm text-4xl md:mt-0 mt-12">
              Gymat an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>
          <div className="md:flex md:flex-row flex flex-col items-center md:gap-10 gap-20 mt-16 relative z-[2]">
            <PricingCard img={Img1} price="39" title="Beginner" />
            <PricingCard img={Img2} price="65" title="Advanced" />
            <PricingCard img={Img3} price="100" title="Pro" />
          </div>
          <Image
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
