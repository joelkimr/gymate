import React, { FormEvent, useState } from "react";
import BgDumbell from "../images/pricing/bg-dumbell.png";
import TrainHarder from "../images/gallery/bg-icon.png";
import Footer from "@/components/Footer/footer";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";

import Image from "next/image";

const JoinClass = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [telnumber, setTelNumber] = useState("");
  const [lastname, setLastName] = useState("");

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    if (
      email === "" &&
      name === "" &&
      message === "" &&
      telnumber === "" &&
      lastname === ""
    ) {
      console.log("Please fill all the Fields!");
      return;
    } else {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ telnumber, email, name, message, lastname }),
        headers: {
          "Content-type": "application/json",
        },
      });
    }
    setLoading(false);
    setEmail("");
    setName("");
    setMessage("");
  }

  return (
    <section className="pricing-section relative w-full">
      <div className="login-banner relative justify-center flex w-full">
        <h1 className="text-white absolute bottom-2 md:text-[30px] text-[70px] font-bold">
          Join Our Class
        </h1>
      </div>
      <div className="w-11/12 flex md:flex-row flex-col  mx-auto relative  md:mt-32 mt-32 mb-32 gap-16 ">
        <Image
          src={TrainHarder}
          alt="bg_icon"
          className="-left-9 -top-28 absolute z-[1]"
        />
        <div className="md:w-1/2 w-full space-y-12">
          <div className="flex flex-col gap-11">
            <h1 className="md:text-4xl text-8xl font-extrabold">
              We are here for help you to Shape Your Body.
            </h1>
            <p className="text-md text-gray-500 md:text-lg text-4xl">
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
          </div>
          <div className="md:flex flex-row gap-44 hidden">
            <div className="flex flex-col gap-5 ">
              <div className="relative space-y-5">
                <p className="md:text-[24px] lg:text-2xl text-5xl font-bold footer-main">
                  Paris, France
                </p>

                <span className="md:top-[10px] top-[44px] absolute md:w-9 w-44 md:h-[4px] h-[8px] bg-[#ff0366]"></span>
                <p className="text-gray-500">
                  Av. Belle-Vue Paris 56-9,
                  <br /> Maria Building HL-4
                </p>
              </div>
              <div className="relative space-y-5">
                <p className="md:text-[24px] lg:text-2xl text-5xl font-bold footer-main">
                  Information
                </p>

                <span className="md:top-[10px] top-[44px] absolute md:w-9 w-44 md:h-[4px] h-[8px] bg-[#ff0366]"></span>
                <p className="text-gray-500">
                  +1 234 567 89
                  <br /> infovercel@gymate.io
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <div className="relative space-y-5">
                <p className="md:text-[24px] lg:text-2xl text-5xl font-bold footer-main">
                  Opening Hours
                </p>

                <span className="md:top-[10px] top-[44px] absolute md:w-14 w-44 md:h-[4px] h-[8px] bg-[#ff0366] lg:block hidden"></span>
                <p className="text-gray-500">
                  Mon to Fri: 7:30 am — 1:00 am
                  <br />
                  Mon to Fri: 7:30 am — 1:00 am
                </p>
              </div>
              <div className="relative space-y-5">
                <p className="md:text-[24px] lg:text-2xl text-5xl font-bold footer-main">
                  Follow Us On
                </p>

                <span className="md:top-[10px] top-[44px] absolute md:w-12 w-44 md:h-[4px] h-[8px] bg-[#ff0366]"></span>
                <div className="flex flex-row text-2xl gap-4">
                  <AiOutlineTwitter className="text-black hover:text-sky-500 cursor-pointer" />
                  <FaInstagram className="text-black hover:text-red-500 cursor-pointer" />
                  <SiFacebook className="text-black hover:text-blue-800 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 md:w-6/12 w-11/12 mx-auto md:mt-8 mt-32 md:mb-20 mb-36 relative z-[9]">
          <form onSubmit={HandleSubmit}>
            <div className="flex flex-wrap md:flex-nowrap space-y-20 md:space-y-0 md:space-x-4 lg:space-x-6 2xl:space-x-8 mb-4">
              <div className="w-full bg-white border border-black/30 md:h-16 h-48 rounded-lg p-3 py-4">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="off"
                    className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative md:top-2 left-7 md:left-0 top-20 5xl:text-xl md:text-sm text-4xl"
                    placeholder="first name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-gray-400 md:peer-focus:text-sm peer-focus:text-4xl"
                  >
                    First Name
                  </label>
                </div>
              </div>
              <div className="w-full bg-white border border-black/30 md:h-16 h-48 rounded-lg p-3 py-4">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="off"
                    className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative md:top-2 left-7 md:left-0 top-20 5xl:text-xl md:text-sm text-4xl"
                    placeholder="last name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label
                    htmlFor="lastname"
                    className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-gray-400 md:peer-focus:text-sm peer-focus:text-4xl"
                  >
                    Last Name
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full bg-white border border-black/30 md:h-16 h-48 rounded-lg p-3 py-4 mt-20 md:mt-0">
              <div className="relative flex-1">
                <input
                  id="number"
                  name="number"
                  type="number"
                  required
                  autoComplete="off"
                  className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative  md:top-2 left-7 md:left-0 top-16 5xl:text-xl md:text-sm text-4xl"
                  placeholder="please enter phone number"
                  value={telnumber}
                  onChange={(e) => setTelNumber(e.target.value)}
                />
                <label
                  htmlFor="telNumber"
                  className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-gray-400 md:peer-focus:text-sm peer-focus:text-4xl"
                >
                  Please Enter Your Telephone Number
                </label>
              </div>
            </div>
            <div className="w-full bg-white border border-black/30 md:h-16 h-48 rounded-lg p-3 py-4 md:mt-4 mt-20">
              <div className="relative flex-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative  md:top-2 left-7 md:left-0 top-20 5xl:text-xl md:text-sm text-4xl"
                  placeholder="your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-gray-400 md:peer-focus:text-sm peer-focus:text-4xl"
                >
                  Please Enter Your Email Address
                </label>
              </div>
            </div>
            <select
              name="classes"
              id="class"
              className="w-full bg-white border border-black/30 md:h-16 h-48 rounded-lg md:p-2 p-8 py-4 md:mt-4 mt-20 text-gray-700 focus:outline-none md:text-sm text-4xl"
            >
              <option value="#">Select Class</option>
              <option value="1">Cycling</option>
              <option value="2">Yoga</option>
              <option value="3">Power Lifting</option>
              <option value="4">Karate</option>
              <option value="5">Boxing</option>
              <option value="5">Running</option>
              <option value="6">Body Building</option>
              <option value="7">Crossing</option>
              <option value="8">Fitness</option>
              <option value="9">Cardio</option>
            </select>
            <div className="flex justify-center md:mt-12 mt-32">
              <div className="w-[25rem] lg:w-56 md:w-72 text-center lg:text-lg md:text-2xl text-4xl border-2 md:py-2 py-7 rounded-xl bg-[#F73F36] hover:bg-red-500 transition ease-out duration-300 text-white hover:text-white font-medium ">
                <button
                  type="submit"
                  disabled={loading}
                  className="get-in-touch relative"
                >
                  {loading ? "- - -" : "SUBMIT NOW"}
                  <span>
                    <IoIosArrowRoundForward className="lg:text-3xl md:text-4xl text-7xl text-white md:block hidden" />
                  </span>
                </button>
              </div>
            </div>
          </form>
          <Image
            src={BgDumbell}
            alt="bg_icon"
            className="-right-16 -bottom-20 absolute  -z-[1]"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default JoinClass;
