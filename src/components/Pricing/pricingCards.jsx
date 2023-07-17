import React from "react";
import Image from "next/image";
import Link from "next/link";

function PricingBox({ img, price, title }) {
  return (
    <>
      <div className='flex flex-col w-1/3 bg-white shadow-xl relative'>
        <div className='relative'>
          <Image
            src={img}
            alt='pricing_img'
            className='w-full h-full grayscale'
          />
          <div className='absolute bg-white text-xl font-bold w-[25rem] lg:pl-24 xl:pl-0 md:pl-20 xl:text-center py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto'>
            {title}
          </div>
        </div>
        <div className='flex flex-col items-center pt-5 pb-14 gap-9'>
          <p className='text-center text-5xl font-extrabold relative py-[10px] '>
            <span className='text-3xl text-[#6d6d6d] absolute font-normal top-3 -left-7'>
              $
            </span>
            {price}
            <span className='text-base text-[#6d6d6d] absolute font-normal bottom-2xl -right-16'>
              p/m
            </span>
          </p>
          <div className='flex flex-col text-sm font-medium text-center gap-5 text-[#646464] '>
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
          </div>

          <div className='w-44 text-center text-black/90 text-sm font-[600] p-4 transition duration-300 rounded-sm uppercase bg-secondary hover:bg-secondary/80 text-white'>
            <Link href='#'>purchase now</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingBox;
