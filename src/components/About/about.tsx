import React from "react";
import AboutCarts from "./aboutCarts";
import Background from "../../images/who-we-are/background.jpg";
import TitleBg from "../../images/pricing/titlebg.svg";
import TrainersIcon from "../../images/who-we-are/weightlifter.png";
import ModernIcon from "../../images/who-we-are/equpments.png";
import LiftIcon from "../../images/who-we-are/gym.png";
import GirlRunning from "../../images/who-we-are/girl-run.png";
import GirlRedBg from "../../images/who-we-are/girl-redbg.svg";
import GirlText from "../../images/who-we-are/girl-side-text.png";
import GirlWind from "../../images/who-we-are/wind.png";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <>
      <section className="flex flex-row gap-2 w-full">
        <div className="relative">
          <div className="flex flex-col lg:flex-row md:flex-col lg:gap-8 md:gap-0 gap-32 md:mx-32 xl:mx-44 lg:mx-14 lg:-mt-20 md:-mt-0 absolute m-20 left-0 2xl:left-[30rem] 2xl:right-[30rem]">
            <AboutCarts />
          </div>
          <div className="lg:flex lg:flex-row xl:justify-around lg:justify-center xl:mx-0 lg:top-96 absolute xl:gap-9 lg:gap-16 md:top-[79rem] top-[129rem] md:items-center lg:ml-0 md:ml-72 left-0 2xl:left-[38rem]">
            <div className="lg:w-2/5 md:w-3/4 ">
              <div className="relative">
                <p className="text-white font-semibold relative md:text-lg text-4xl uppercase lg:text-sm z-10 md:p-0 p-5 md:ml-56 lg:-top-2 lg:ml-52 ml-[30rem]">
                  who we are
                </p>
                <Image
                  src={TitleBg}
                  alt="text_bg"
                  className="md:w-64 w-[35rem] lg:w-44 absolute -top-3 md:ml-40 ml-80"
                />
                <h2 className="md:text-4xl font-bold md:mb-4 text-6xl md:mt-9 mt-24 text-center lg:text-4xl">
                  Take Your Health And Body To Next Level
                </h2>
                <p className="text-[#646464]  md:text-lg text-4xl md:mt-0 mt-12 text-center md:p-0 p-9 lg:text-sm">
                  Take your health and body to the next level with our
                  comprehensive program designed to help you reach your fitness
                  goals.
                </p>
              </div>
              <div className="md:flex md:flex-row flex flex-col mt-6 mb-[7rem] gap-[2px]">
                <div className="flex flex-col  items-center text-center py-10 px-8 pl-7">
                  <Image
                    src={TrainersIcon}
                    alt="icon_img"
                    className={`lg:w-[4rem] md:w-[6rem] mb-6 h-auto w-44`}
                  />
                  <h3 className="uppercase font-bold md:text-base lg:text-sm text-4xl leading-snug">
                    professional <br /> trainers
                  </h3>
                </div>

                <div className="flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none md:block hidden">
                  <Image
                    src={ModernIcon}
                    alt="icon_img"
                    className={`lg:w-[4rem] md:w-[6rem] mb-6 h-auto w-44`}
                  />
                  <h3 className="uppercase font-bold md:text-base lg:text-sm text-4xl leading-snug">
                    modern <br /> equipments
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center py-10 px-14 md:pr-2">
                  <Image
                    src={LiftIcon}
                    alt="icon_img"
                    className={`lg:w-[4rem] md:w-[6rem] mb-6 h-auto w-44`}
                  />
                  <h3 className="uppercase font-bold md:text-base lg:text-sm text-4xl leading-snug">
                    fancy gym <br />
                    machines
                  </h3>
                </div>
              </div>
              <div className="bg-black/80 lg:w-44 md:w-52 w-80 text-center lg:text-sm md:text-lg text-4xl text-white font-[600] md:p-4 p-7 hover:bg-secondary transition duration-300 rounded-sm lg:ml-0 md:ml-[11.8rem] ml-[29rem] -mt-12 md:-mt-28 lg:-mt-0">
                <Link href="/gallery">TAKE A TOUR</Link>
              </div>
            </div>

            <div className="w-2/5 hidden lg:block">
              <Image
                src={GirlRunning}
                alt="girl_running"
                className="xl:w-[30rem] lg:w-[20rem] absolute xl:h-[32rem] lg:h-[22rem] xl:ml-20 lg:ml-24 mt-5"
              />
              <div
                className="flex flex-row-reverse gap-24
            "
              >
                <Image
                  src={GirlRedBg}
                  alt="bg-red"
                  className="xl:h-[32rem] lg:h-[22rem] mt-4"
                />
                <Image
                  src={GirlWind}
                  alt="bg-wind"
                  className="absolute flex flex-row xl:top-64 lg:top-72 xl:right-32 lg:right-36 w-20"
                />
                <Image
                  src={GirlText}
                  alt="bg-text"
                  className="w-auto lg:hidden xl:block"
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src={Background}
              alt="home_image"
              className="w-full lg:min-h-[65rem] md:min-h-[115rem] min-h-[240rem] min-w-[60rem] 2xl:min-w-[160rem]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
