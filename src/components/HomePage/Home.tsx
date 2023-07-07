import TitleBg from "../../images/pricing/titlebg.svg";
import MainButton from "../MainButton";
import Image from "next/image";
import Homeimage from "../../images/hero/hero-img.jpg";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";

function Hero() {
  return (
    <>
      <section className='w-full relative'>
        <Image
          src={Homeimage}
          alt='home_image'
          className='w-full h-110vh bg-cover bg-center'
        />

        <div className='flex flex-col text-white absolute top-72 right-48'>
          <p className='text-white text-sm uppercase font-medium z-10 pl-12 mb-8'>
            find your energy
          </p>
          <Image
            src={TitleBg}
            alt='text_bg'
            className=' w-60 absolute -top-3'
          />
          <h1 className='font-bold text-[45px] uppercase mb-[4rem]'>
            make your body <br />
            <span className='font-thin'>fit & perfect</span>
          </h1>

          <MainButton />
        </div>

        <div
          className='flex flex-row-reverse -rotate-90 text-white
          absolute top-2/4 -right-9 items-center'>
          <p className='uppercase text-md font-bold tracking-widest'>share</p>
          <span className='w-[35px] bg-[#FF0336] h-[2.5px] mr-6'></span>
          <div className='text-white gap-7 flex mr-7 '>
            <SiFacebook className='rotate-90 hover:text-blue-800 text-2xl cursor-pointer ease-in duration-200' />
            <AiOutlineTwitter className='rotate-90 hover:text-sky-500 text-2xl cursor-pointer ease-in duration-200' />
            <FaInstagram className='rotate-90 hover:text-secondary text-2xl cursor-pointer ease-in duration-200' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
