import React from "react";
import Footer from "@/components/Footer/footer";
import { MdOutlineWifiCalling } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { VscLocation } from "react-icons/vsc";

const Contact = () => {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex w-full">
          <h1 className="text-white absolute bottom-2 md:text-[30px] text-[70px] font-bold">
            Contact
          </h1>
        </div>
        <div className="xl:w-5/12 lg:6/12 md:w-7/12 flex flex-col mx-auto my-11 md:p-0 p-16 lg:space-y-4 space-y-11">
          <h1 className="font-bold lg:text-2xl md:text-4xl text-6xl text-center">
            Feel free and welcomed to get in touch over Phone, Chat, Email or
            Beverage
          </h1>
          <div className="flex flex-col mx-auto border border-black/40 rounded-2xl lg:w-[32rem] md:w-[42rem] w-[70rem] md:h-96 h-[39rem] items-center justify-center bg-[#f8f8f8] space-y-6 md:space-y-1">
            <h1 className="font-semibold lg:text-2xl md:text-3xl text-5xl">
              General Inquiries
            </h1>
            <div className="flex flex-row items-center gap-2 pt-4">
              <MdOutlineWifiCalling className="text-red-500 md:text-2xl text-5xl" />
              <p className="xl:text-[16px] lg:text-xl md:text-2xl text-4xl">
                +X XXX XXX XXX
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 pt-2">
              <SiMinutemailer className="text-red-500 md:text-2xl text-5xl" />
              <p className="xl:text-[16px] lg:text-xl md:text-2xl text-4xl">
                infovercel@gymate.io
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 pt-2">
              <VscLocation className="text-red-500 md:text-2xl text-5xl" />
              <p className="xl:text-[16px] lg:text-xl md:text-2xl text-4xl">
                Av. Belle-Vue Paris 56-9, Maria Building HL-4
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
