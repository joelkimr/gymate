import React from "react";
import Image from "next/image";
import { cardList } from "./CardList";

function AboutCarts() {
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col bg-white justify-center px-4 text-center items-center md:mt-12 text-lg md:rounded-tl-[35px] rounded-tl-[100px] md:rounded-br-[35px] rounded-br-[100px] shadow-2xl lg:min-h-[300px] md:min-h-[250px] min-h-[550px] z-30 hover:bg-[#F3F3F3] hover:text-black min-w-[200px] space-y-3"
        >
          <Image
            src={card.img}
            alt="box_img"
            className="md:w-20 md:mb-4 w-44 mb-14 md:mt-9 lg:mt-9"
          />
          <p className=" md:text-[25px] text-[50px] font-extrabold uppercase mb-12">
            {card.title}
          </p>
          <p className="lg:text-[15px] md:text-[20px] text-4xl leading-2 md:w-full w-4/5 md:h-40 h-32 pt-4 md:pt-0">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;
