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
import MainButton from "../MainButton";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <>
      <section className='flex flex-row gap-2'>
        <div className='relative'>
          <div className='flex flex-row gap-8 mx-72 -mt-20 absolute'>
            <AboutCarts />
          </div>
          <div className='flex flex-row justify-end top-96 absolute'>
            <div className='w-2/5'>
              <div className='relative'>
                <p className='text-white font-semibold relative text-xs uppercase z-10 pl-16'>
                  who we are
                </p>
                <Image
                  src={TitleBg}
                  alt='text_bg'
                  className=' w-52 absolute -top-3'
                />
                <h2 className='text-3xl font-bold mb-6 mt-6 w-[60rem]'>
                  Take Your Health And Body To Next Level
                </h2>
                <p className='text-sm text-[#646464] font-medium '>
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
                    className={`w-[4rem] mb-6 h-auto`}
                  />
                  <h3 className='uppercase font-bold text-md leading-snug'>
                    professional <br /> trainers
                  </h3>
                </div>

                <div className='flex flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none'>
                  <Image
                    src={ModernIcon}
                    alt='icon_img'
                    className={`w-[4rem] mb-6 h-auto`}
                  />
                  <h3 className='uppercase font-bold text-md leading-snug'>
                    modern <br /> equipments
                  </h3>
                </div>

                <div className='flex flex-col items-center text-center py-10 px-14 pr-2'>
                  <Image
                    src={LiftIcon}
                    alt='icon_img'
                    className={`w-[4rem] mb-6 h-auto`}
                  />
                  <h3 className='uppercase font-bold text-md leading-snug'>
                    fancy gym <br />
                    machines
                  </h3>
                </div>
              </div>
              <div className='bg-black/80 w-44 text-center text-white font-[600] p-4 hover:bg-secondary transition duration-300 rounded-sm'>
                <Link href='#'>TAKE A TOUR</Link>
              </div>
            </div>

            <div className='w-2/5'>
              <Image
                src={GirlRunning}
                alt='girl_running'
                className='w-auto absolute h-[32rem] ml-20 mt-5'
              />
              <div
                className='flex flex-row-reverse gap-24
            '>
                <Image
                  src={GirlRedBg}
                  alt='bg-red'
                  className='h-[32rem] mt-4'
                />
                <Image
                  src={GirlWind}
                  alt='bg-wind'
                  className='absolute flex flex-row top-64 right-16 w-20'
                />
                <Image src={GirlText} alt='bg-text' className='w-auto' />
              </div>
            </div>
          </div>
          <div>
            <Image
              src={Background}
              alt='home_image'
              className='w-full min-h-[999px]'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
