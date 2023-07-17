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
      <section className='flex flex-row gap-2 xl:w-[100%] lg:w-[110%] md:w-[150%]'>
        <div className='relative'>
          <div className='flex flex-col lg:flex-row md:flex-col lg:gap-8 md:gap-0 gap-12 md:mx-32 xl:mx-72 lg:mx-16 -mt-20 absolute m-20'>
            <AboutCarts />
          </div>
          <div className='lg:flex lg:flex-row xl:justify-end lg:justify-center xl:mx-0 lg:top-96 absolute xl:gap-0 lg:gap-16 md:top-[60rem] md:items-center lg:ml-0 md:ml-48'>
            <div className='lg:w-2/5 md:w-3/4'>
              <div className='relative'>
                <p className='text-white font-semibold relative text-xs uppercase z-10 pl-16'>
                  who we are
                </p>
                <Image
                  src={TitleBg}
                  alt='text_bg'
                  className=' w-52 absolute -top-3'
                />
                <h2 className='lg:text-3xl md:text-4xl font-bold mb-6 mt-6 w-[60rem]'>
                  Take Your Health And Body To Next Level
                </h2>
                <p className='lg:text-sm md:text-lg text-[#646464] font-medium '>
                  Take your health and body to the next level with our
                  comprehensive program designed to help you reach your fitness
                  goals.
                </p>
              </div>
              <div className='flex mt-6 mb-[7rem] gap-[2px]'>
                <div className='flex flex-col  items-center text-center py-10 px-8 pl-7'>
                  <Image
                    src={TrainersIcon}
                    alt='icon_img'
                    className={`lg:w-[4rem] md:w-[6rem] mb-6 h-auto`}
                  />
                  <h3 className='uppercase font-bold text-md leading-snug'>
                    professional <br /> trainers
                  </h3>
                </div>

                <div className='flex flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none'>
                  <Image
                    src={ModernIcon}
                    alt='icon_img'
                    className={`lg:w-[4rem] md:w-[6rem] mb-6 h-auto`}
                  />
                  <h3 className='uppercase font-bold text-md leading-snug'>
                    modern <br /> equipments
                  </h3>
                </div>

                <div className='flex flex-col items-center text-center py-10 px-14 pr-2'>
                  <Image
                    src={LiftIcon}
                    alt='icon_img'
                    className={`lg:w-[4rem] md:w-[6rem] mb-6 h-auto`}
                  />
                  <h3 className='uppercase font-bold text-md leading-snug'>
                    fancy gym <br />
                    machines
                  </h3>
                </div>
              </div>
              <div className='bg-black/80 lg:w-44 md:w-52 text-center lg:text-sm md:text-xl text-white font-[600] p-4 hover:bg-secondary transition duration-300 rounded-sm lg:ml-0 md:ml-60'>
                <Link href='#'>TAKE A TOUR</Link>
              </div>
            </div>

            <div className='w-2/5 md:hidden lg:block'>
              <Image
                src={GirlRunning}
                alt='girl_running'
                className='xl:w-[32rem] lg:w-[23rem] absolute xl:h-[32rem] lg:h-[22rem] xl:ml-20 lg:ml-24 mt-5'
              />
              <div
                className='flex flex-row-reverse gap-24
            '>
                <Image
                  src={GirlRedBg}
                  alt='bg-red'
                  className='xl:h-[32rem] lg:h-[22rem] mt-4'
                />
                <Image
                  src={GirlWind}
                  alt='bg-wind'
                  className='absolute flex flex-row xl:top-64 lg:top-72 xl:right-16 lg:right-36 w-20'
                />
                <Image
                  src={GirlText}
                  alt='bg-text'
                  className='w-auto lg:hidden xl:block'
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src={Background}
              alt='home_image'
              className='w-full lg:min-h-[65rem] md:min-h-[103rem] min-h-[130rem] min-w-[60rem]'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
