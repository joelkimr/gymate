import React, { FormEvent, useState } from "react";
import BgDumbell from "../images/pricing/bg-dumbell.png";
import TrainHarder from "../images/gallery/bg-icon.png";
import Footer from "@/components/Footer/footer";
import { Select, SelectItem } from "@nextui-org/select";
import { IoIosArrowRoundForward } from "react-icons/io";
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

  const classes = [
    { key: "cycling", label: "Cycling" },
    { key: "yoga", label: "Yoga" },
    { key: "power lifting", label: "Power Lifting" },
    { key: "karate", label: "Karate" },
    { key: "boxing", label: "Boxing" },
    { key: "running", label: "Running" },
    { key: "body building", label: "Body Building" },
    { key: "crossing", label: "Crossing" },
    { key: "fitness", label: "Fitness" },
    { key: "cardio", label: "Cardio" },
  ];

  return (
    <section className="pricing-section relative w-full">
      <div className="login-banner relative justify-center flex w-full">
        <h1 className="text-white absolute bottom-2 md:text-[30px] text-[70px] font-bold">
          Join Our Class
        </h1>
      </div>
      <div className="lg:w-5/12 md:w-6/12 w-11/12 mx-auto md:mt-8 mt-32 md:mb-20 mb-36 relative">
        <Image
          src={TrainHarder}
          alt="bg_icon"
          className="-left-96 top-0 absolute z-[1]"
        />
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
                  className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative md:top-2 left-7 md:left-0 top-20 5xl:text-xl md:text-sm text-5xl"
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
                  className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative md:top-2 left-7 md:left-0 top-20 5xl:text-xl md:text-sm text-5xl"
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
                className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative  md:top-2 left-7 md:left-0 top-16 5xl:text-xl md:text-sm text-5xl"
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
                className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative  md:top-2 left-7 md:left-0 top-20 5xl:text-xl md:text-sm text-5xl"
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
          <div className="w-full bg-white border border-black/30 h-24 rounded-lg p-3 py-4 md:mt-4 mt-20">
            <div className="flex w-full gap-4 relative ">
              <Select
                placeholder="Click to select"
                selectionMode="multiple"
                className="w-full focus:outline-none -ml-3 mt-4 text-sm"
              >
                {classes.map((c) => (
                  <SelectItem
                    key={c.key}
                    className="focus:outline-none bg-red-500 text-white w-44 pl-11 pt-1 pb-1 hover:bg-red-400"
                  >
                    {c.label}
                  </SelectItem>
                ))}
              </Select>
              <label
                htmlFor="class"
                className="absolute left-0 -top-2 text-gray-500 md:text-sm text-xs 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 md:peer-placeholder-shown:top-2 5xl:peer-placeholder-shown:top-4 peer-focus:-top-2 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-gray-400 md:peer-focus:text-sm peer-focus:text-xs"
              >
                Please Select Your class
              </label>
            </div>
          </div>
          <div className="flex justify-center md:mt-12 mt-32">
            <div className="w-[25rem] lg:w-48 md:w-72 text-center lg:text-lg md:text-2xl text-6xl border-2 md:py-2 py-7 rounded-3xl bg-[#F73F36] hover:bg-red-500 transition ease-out duration-300 text-white hover:text-white font-medium ">
              <button
                type="submit"
                disabled={loading}
                className="get-in-touch relative"
              >
                {loading ? "- - -" : "Join"}
                <span>
                  <IoIosArrowRoundForward className="lg:text-3xl md:text-4xl text-7xl text-white" />
                </span>
              </button>
            </div>
          </div>
        </form>
        <Image
          src={BgDumbell}
          alt="bg_icon"
          className="-right-96 -bottom-20 absolute z-[1]"
        />
      </div>
      <Footer />
    </section>
  );
};

export default JoinClass;
