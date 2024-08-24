import React, { FormEvent, useState } from "react";
import Footer from "@/components/Footer/footer";
import Link from "next/link";

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
      <div className="w-full flex flex-col  mx-auto relative  md:mt-20 mt-32 mb-24 gap-16 ">
        <div className="lg:w-5/12 md:w-6/12 w-11/12 mx-auto md:mt-8 mt-32 md:mb-20 mb-36 relative z-[9] bg-black rounded-sm p-9">
          <form onSubmit={HandleSubmit}>
            <div className="flex flex-wrap md:flex-nowrap space-y-20 md:space-y-0 md:space-x-4 lg:space-x-6 2xl:space-x-8 mb-4">
              <div className="w-full bg-white md:h-16 h-48 rounded-sm p-3 py-4">
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
                    className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-black/80 md:peer-focus:text-sm peer-focus:text-4xl"
                  >
                    First Name
                  </label>
                </div>
              </div>
              <div className="w-full bg-white  md:h-16 h-48 rounded-sm p-3 py-4">
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
                    className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-black/80 md:peer-focus:text-sm peer-focus:text-4xl"
                  >
                    Last Name
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full bg-white  md:h-16 h-48 rounded-sm p-3 py-4 mt-20 md:mt-0">
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
                  className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-black/80 md:peer-focus:text-sm peer-focus:text-4xl"
                >
                  Please Enter Your Telephone Number
                </label>
              </div>
            </div>
            <div className="w-full bg-white  md:h-16 h-48 rounded-sm p-3 py-4 md:mt-4 mt-20">
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
                  className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-black/80 md:peer-focus:text-sm peer-focus:text-4xl"
                >
                  Please Enter Your Email Address
                </label>
              </div>
            </div>
            <div className="w-full bg-white  md:h-16 h-48 rounded-sm p-3 py-4 md:mt-4 mt-20">
              <div className="relative flex-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="off"
                  className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative  md:top-2 left-7 md:left-0 top-20 5xl:text-xl md:text-sm text-4xl"
                  placeholder="Enter Password"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-black/80 md:peer-focus:text-sm peer-focus:text-4xl"
                >
                  Enter Password
                </label>
              </div>
            </div>
            <div className="w-full bg-white  md:h-16 h-48 rounded-sm p-3 py-4 md:mt-4 mt-20">
              <div className="relative flex-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="off"
                  className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative  md:top-2 left-7 md:left-0 top-20 5xl:text-xl md:text-sm text-4xl"
                  placeholder="Confirm Password"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="confirmpassword"
                  className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-black/80 md:peer-focus:text-sm peer-focus:text-4xl"
                >
                  Confirm Password
                </label>
              </div>
            </div>
            <div className="w-full h-16 flex items-center">
              <p className="text-white">
                Already have an account ?{" "}
                <span className="text-[#F73F36] font-bold">
                  <Link href="/SignUp">Sign in</Link>
                </span>
              </p>
            </div>
            {/* <select
              name="classes"
              id="class"
              className="w-full bg-white border border-black/30 md:h-16 h-48 rounded-sm md:p-2 p-8 py-4 md:mt-4 mt-20 text-gray-700 focus:outline-none md:text-sm text-4xl"
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
            </select> */}
            <div className="flex justify-center md:mt-12 mt-32">
              <div className="w-full md:w-72 text-center lg:text-lg md:text-2xl text-4xl md:py-2 py-7 rounded-sm bg-[#F73F36] hover:bg-red-500 transition ease-out duration-300 text-white hover:text-white font-medium ">
                <button
                  type="submit"
                  disabled={loading}
                  className="get-in-touch relative"
                >
                  {loading ? "- - -" : "Register"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default JoinClass;
