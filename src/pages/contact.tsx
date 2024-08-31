import React from "react";
import Footer from "@/components/Footer/footer";
import BgDumbell from "../images/pricing/bg-dumbell.png";
import TrainHarder from "../images/gallery/bg-icon.png";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex w-full">
          <h1 className="text-white absolute bottom-2 md:text-[30px] text-[70px] font-bold">
            Contact
          </h1>
        </div>
        <div className="md:w-7/12 lg:w-8/12 xl:w-1/2 w-full space-y-12 mx-auto  md:mt-20 mt-32 mb-32 relative">
          <Image
            src={TrainHarder}
            alt="bg_icon"
            className="md:-left-56 lg:-left-48  xl:-left-80 -top-16 absolute z-[1]"
          />
          <div className="flex flex-col gap-11 p-9">
            <h1 className="md:text-4xl text-8xl font-extrabold text-center">
              We are here for help you to Shape Your Body.
            </h1>
            <p className="text-gray-500 md:text-lg text-[40px]">
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
          </div>
          <div className="flex md:flex-row flex-col md:gap-12 lg:gap-20 xl:gap-32 md:ml-9 items-center ">
            <div className="flex flex-col md:gap-5 gap-20">
              <div className="relative space-y-5">
                <p className="md:text-[24px] lg:text-2xl text-6xl font-bold footer-main">
                  Paris, France
                </p>

                <span className="md:top-[10px] top-[50px] absolute md:w-9 w-44 md:h-[4px] h-[8px] bg-[#ff0366]"></span>
                <p className="text-gray-500 text-[44px] md:text-lg">
                  Av. Belle-Vue Paris 56-9,
                  <br /> Maria Building HL-4
                </p>
              </div>
              <div className="relative space-y-5">
                <p className="md:text-[24px] lg:text-2xl text-6xl  font-bold footer-main">
                  Information
                </p>

                <span className="md:top-[10px] top-[50px] absolute md:w-9 w-44 md:h-[4px] h-[8px] bg-[#ff0366]"></span>
                <p className="text-gray-500 text-[44px] md:text-lg">
                  +1 234 567 89
                  <br /> infovercel@gymate.io
                </p>
              </div>
            </div>
            <div className="flex flex-col md:gap-5 gap-20 mt-14 md:mt-0 ml-28 md:ml-0">
              <div className="relative md:space-y-5 space-y-9">
                <p className="md:text-[24px] lg:text-2xl text-6xl  font-bold footer-main">
                  Opening Hours
                </p>

                <span className="md:top-[10px] top-[38px] absolute md:w-14 w-44 md:h-[4px] h-[8px] bg-[#ff0366]"></span>
                <p className="text-gray-500 text-[44px] md:text-lg">
                  Mon to Fri: 7:00 am — 21:00 pm
                  <br />
                  Saturday: 7:00 am — 19:00 pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div className="relative space-y-5">
                <p className="md:text-[24px] lg:text-2xl text-6xl  font-bold footer-main">
                  Follow Us On
                </p>

                <span className="md:top-[10px] top-[50px] absolute md:w-12 w-44 md:h-[4px] h-[8px] bg-[#ff0366]"></span>
                <div className="flex flex-row md:text-2xl text-[64px] gap-4 md:pt-0 pt-9">
                  <AiOutlineTwitter className="text-black hover:text-sky-500 cursor-pointer" />
                  <FaInstagram className="text-black hover:text-red-500 cursor-pointer" />
                  <SiFacebook className="text-black hover:text-blue-800 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <Image
            src={BgDumbell}
            alt="bg_icon"
            className="md:-right-60 lg:-right-52 xl:-right-72 -right-1 -bottom-20 absolute  z-[1]"
          />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
