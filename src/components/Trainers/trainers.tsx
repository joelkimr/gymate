import React from "react";
import Trainer1 from "../../images/trainers/trainer1.png";
import Trainer2 from "../../images/trainers/trainer2.png";
import Trainer3 from "../../images/trainers/trainer3.png";
import TrainerBg from "../../images/trainers/trainer-bg.png";
import Shape from "../../images/trainers/shape.png";
import Image from "next/image";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";

function Trainers() {
  const trainers = [
    { img: Trainer1, name: "John Lewis", job: "Crossfit Trainer" },
    { img: Trainer2, name: "Jonathan Doe", job: "Personal Trainer" },
    { img: Trainer3, name: "Ana June", job: "Yoga Trainer" },
  ];

  return (
    <>
      <section className='trainers-section  xl:w-auto lg:w-[110%] md:w-[150%]'>
        <div className='container page-padding py-28'>
          <div className='flex flex-col items-center text-center relative'>
            <p className='text-white relative z-10 text-sm uppercase font-bold mb-10'>
              gym trainers
            </p>
            <Image
              src={TitleRed}
              alt='text_bg'
              className='w-64 absolute -top-3'
            />

            <h2 className='text-3xl font-bold mb-4'>Team Of Expert Coaches</h2>
            <p className='text-[#646464] font-medium text-sm'>
              Expert team of coaches helps you succeed in any goal,
              <br /> personalized guidance and motivation provided!
            </p>
          </div>

          <div className='flex mt-20 '>
            <div
              className='flex justify-center md:gap-20'
              style={{ margin: "0 auto" }}>
              {trainers.map((train, id) => (
                <div
                  key={id}
                  className='relative xl:w-96 lg:w-80 flex flex-col gap-12'>
                  <Image
                    src={train.img}
                    alt='trainer'
                    className='xl:w-60 lg:w-52 z-10 relative mx-auto'
                  />
                  <Image
                    src={TrainerBg}
                    alt='trainer_background'
                    className='absolute top-1 w-full'
                  />
                  <div className='box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px]'>
                    <Image
                      alt='shape'
                      src={Shape}
                      className='absolute -top-[25px] lg:left-[113px] md:left-[75px]'
                    />

                    <h3 className='font-bold text-xl'>{train.name}</h3>
                    <p className='font-medium text-sm text-[#646464]'>
                      {train.job}
                    </p>
                    <div className='flex gap-5 text-[#646464] w-full justify-center mt-5 text-2xl'>
                      <SiFacebook className='text-blue-900 cursor-pointer' />
                      <AiOutlineTwitter className='text-sky-500 cursor-pointer' />
                      <FaInstagram className='text-secondary cursor-pointer' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
