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
      <section className='pricing-section relative xl:w-auto lg:w-[100%] md:w-[140%] min-w-[50rem]'>
        <div className='container page-padding py-16'>
          <Image src={BgText} className='left-0 absolute' alt='bg_img' />
          <div className='flex flex-col text-center relative items-center'>
            <p className='text-white relative z-10 text-sm uppercase font-bold mb-8'>
              PRICING CHART
            </p>
            <Image
              src={TitleRed}
              alt='text_bg'
              className='w-64 absolute -top-[10px] '
            />

            <h2 className='text-2xl font-bold mb-4'>Exclusive Pricing Plan</h2>
            <p className='text-[#646464] font-medium text-sm'>
              Gymat an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>
          <div className='md:flex md:flex-row flex flex-col gap-10 mt-16 relative z-[2]'>
            <PricingCard img={Img1} price='39' title='Beginner' />
            <PricingCard img={Img2} price='65' title='Advanced' />
            <PricingCard img={Img3} price='100' title='Pro' />
          </div>
          <Image
            src={BgDumbell}
            alt='bg_icon'
            className='right-0 bottom-0 absolute z-[1]'
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
