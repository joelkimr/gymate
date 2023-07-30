import React from "react";
import Image from "next/image";
import Link from "next/link";

function PricingBox({ img, price, title }) {
  return (
    <>
      <div className='flex flex-col md:w-1/3 w-3/4 bg-white shadow-xl relative'>
        <div className='relative'>
          <Image
            src={img}
            alt='pricing_img'
            className='w-full h-full grayscale'
          />
          <div className='absolute bg-white md:text-xl text-5xl font-bold md:w-[25rem] w-full lg:pl-24 xl:pl-0 md:pl-28 xl:text-center pl-60 py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto'>
            {title}
          </div>
        </div>
        <div className='flex flex-col items-center pt-5 pb-14 gap-9'>
          <p className='text-center text-5xl font-extrabold relative py-[10px] '>
            <span className='md:text-3xl text-4xl text-[#6d6d6d] absolute font-normal top-3 -left-7'>
              $
            </span>
            {price}
            <span className='md:text-base text-3xl text-[#6d6d6d] absolute font-normal bottom-2xl -right-16'>
              p/m
            </span>
          </p>
          <div className='flex flex-col md:text-sm text-3xl font-medium text-center gap-5 text-[#646464] '>
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
          </div>

          <div className='md:w-44 w-72 text-center text-black/90 md:text-sm text-2xl font-[600] md:p-4 p-6 transition duration-300 rounded-sm uppercase bg-secondary hover:bg-secondary/80 text-white'>
            <Link href='#'>purchase now</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingBox;
