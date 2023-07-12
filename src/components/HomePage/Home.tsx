import TitleBg from "../../images/pricing/titlebg.svg";
import MainButton from "../MainButton";
import Image from "next/image";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";

function Hero() {
  return (
    <>
      <section className='hero-section xl:w-full lg:w-[110%] h-screen md:w-[150%] md:min-h-[52rem]'>
        <div className='container-hero'>
          <div
            className='flex flex-col text-white
           absolute hero-text md:-right-[26rem] lg:-right-0 lg:top-96 md:top-[29rem]'>
            <p className='text-white lg:text-sm md:text-xl uppercase font-medium relative z-10 lg:pl-9 md:pl-14 mb-8'>
              find your energy
            </p>
            <Image
              src={TitleBg}
              alt='text_bg'
              className=' w-[52%] absolute -top-3 title-white'
            />
            <h1 className='font-bold lg:text-[40px] md:text-[60px] uppercase mb-[4rem] min450:text-[40px]'>
              make your body <br />
              <span className='font-thin'>fit & perfect</span>
            </h1>

            <MainButton />
          </div>
        </div>

        <div
          className='flex flex-row-reverse -rotate-90 text-white
          absolute lg:top-2/4 md:top-2/3 xl:-right-9 lg:-right-44 items-center md:-right-[28rem]'>
          <p className='uppercase lg:text-md md:text-sm font-bold tracking-widest '>
            share
          </p>
          <span className='w-[35px] bg-[#FF0336] h-[2.5px] mr-6'></span>
          <div className='text-white gap-7 flex mr-7 '>
            <SiFacebook className='rotate-90 hover:text-blue-800 lg:text-2xl md:text-2xl cursor-pointer ease-in duration-200' />
            <AiOutlineTwitter className='rotate-90 hover:text-sky-500 lg:text-2xl md:text-2xl cursor-pointer ease-in duration-200' />
            <FaInstagram className='rotate-90 hover:text-secondary lg:text-2xl md:text-2xl cursor-pointer ease-in duration-200' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
