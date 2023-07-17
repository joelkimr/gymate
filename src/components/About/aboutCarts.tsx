import React from "react";
import Image from "next/image";
import { cardList } from "./CardList";

function AboutCarts() {
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className='flex flex-col bg-white justify-center px-7 text-center items-center md:mt-12 text-lg rounded-tl-[35px] rounded-br-[35px] shadow-2xl lg:min-h-[290px] md:min-h-[250px] min-h-[450px] z-30 hover:bg-black/90 hover:text-white'>
          <Image
            src={card.img}
            alt='box_img'
            className='md:w-20 md:mb-4 w-44 mb-8'
          />
          <p className=' md:text-[24px] text-[35px] font-bold uppercase mb-7'>
            {card.title}
          </p>
          <p className='lg:text-[13px] md:text-[20px] text-[23px] font-medium leading-2 w-full'>
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;
