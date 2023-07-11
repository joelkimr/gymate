import React from "react";
import Image from "next/image";
import { cardList } from "./CardList";

function AboutCarts() {
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className='flex flex-col bg-white justify-center px-7 text-center items-center mt-12 text-lg rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[290px] z-30 hover:bg-black/90 hover:text-white'>
          <Image src={card.img} alt='box_img' className='w-20 mb-4' />
          <p className=' text-[24px] font-bold uppercase mb-7'>{card.title}</p>
          <p className='text-[13px] font-medium leading-2 w-full'>
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;
