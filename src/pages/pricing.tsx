import React from "react";
import Image from "next/image";
import BgDumbell from "../images/pricing/bg-dumbell.png";
import PricingCard from "../components/Pricing/pricingCards";

import Img1 from "../images/pricing/img1.jpg";
import Img2 from "../images/pricing/img2.jpg";
import Img3 from "../images/pricing/img3.jpg";
import Footer from "@/components/Footer/footer";

const Pricing = () => {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex w-full">
          <h1 className="text-white absolute bottom-2 md:text-[30px] text-[70px] font-bold">
            Pricing
          </h1>
        </div>
        <div className="container page-padding py-16">
          <div className="flex flex-col text-center relative items-center">
            <h2 className="md:text-4xl lg:text-4xl font-bold md:mb-4 text-7xl md:mt-0 mt-24">
              Exclusive Pricing Plan
            </h2>
            <p className="text-[#646464] md:text-lg lg:text-sm text-4xl md:mt-0 mt-12">
              Gymat an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>
          <div className="md:flex md:flex-row flex flex-col items-center md:gap-10 gap-20 mt-16 relative z-[2]">
            <PricingCard img={Img1} price="39" title="Beginner" />
            <PricingCard img={Img2} price="65" title="Advanced" />
            <PricingCard img={Img3} price="100" title="Professional" />
          </div>
          <Image
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 top-72  absolute -z-[1]"
          />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Pricing;
