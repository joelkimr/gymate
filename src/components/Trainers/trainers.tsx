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
      {/* <section className='trainers-section  xl:w-auto lg:w-[110%] md:w-[150%] min-w-[60rem]'> */}
      <section className="trainers-section w-full">
        <div className="container page-padding py-28">
          <div className="flex flex-col items-center text-center relative">
            <p className="text-white relative z-10 md:text-sm uppercase font-bold md:mb-10 text-3xl md:pt-0 pt-5 md:ml-0 ml-16">
              gym trainers
            </p>
            <Image
              src={TitleRed}
              alt="text_bg"
              className="md:w-64 w-[35rem] absolute -top-3 md:ml-0 ml-16"
            />

            <h2 className="md:text-3xl font-bold md:mb-4 text-6xl md:mt-0 mt-32">
              Team Of Expert Coaches
            </h2>
            <p className="text-[#646464] font-medium md:text-sm text-3xl md:mt-0 mt-12">
              Expert team of coaches helps you succeed in any goal,
              <br /> personalized guidance and motivation provided!
            </p>
          </div>

          <div className="flex mt-20 ">
            <div
              className="md:flex md:flex-row flex flex-col justify-center md:gap-14 gap-28"
              style={{ margin: "0 auto" }}
            >
              {trainers.map((train, id) => (
                <div key={id} className="relative w-auto flex flex-col gap-12">
                  <Image
                    src={train.img}
                    alt="trainer"
                    className="xl:w-60 lg:w-52 md:w-60 w-[27rem] z-10 relative mx-auto"
                  />
                  <Image
                    src={TrainerBg}
                    alt="trainer_background"
                    className="absolute top-1 w-full"
                  />
                  <div className="box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px]">
                    <Image
                      alt="shape"
                      src={Shape}
                      className="absolute -top-[25px] lg:left-[113px] md:left-[75px] left-[170px]"
                    />

                    <h3 className="font-bold md:text-xl text-5xl">
                      {train.name}
                    </h3>
                    <p className="font-medium md:text-sm text-3xl md:mt-0 mt-5 text-[#646464]">
                      {train.job}
                    </p>
                    <div className="flex gap-5 text-[#646464] w-full justify-center mt-5 md:text-2xl text-5xl">
                      <SiFacebook className="text-blue-900 cursor-pointer" />
                      <AiOutlineTwitter className="text-sky-500 cursor-pointer" />
                      <FaInstagram className="text-secondary cursor-pointer" />
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
