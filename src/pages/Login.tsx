import Link from "next/link";
import React, { FormEvent, useState } from "react";
import Footer from "@/components/Footer/footer";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function HandleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    if (email === "" && password === "") {
      console.log("Please fill all the Fields!");
      return;
    } else {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-type": "application/json",
        },
      });
    }
    setLoading(false);
    setEmail("");
    setPassword("");
  }

  return (
    <section className="login-section">
      <div className="login-banner relative justify-center flex w-full">
        <h1 className="text-white absolute bottom-2 md:text-[30px] text-[70px] font-bold md:block hidden">
          Login
        </h1>
      </div>
      <div className="w-full flex flex-col  mx-auto relative  md:mt-20 mt-16 mb-24 gap-16 ">
        <p className="md:text-[30px] text-[70px] font-bold mx-auto md:hidden block">
          Login
        </p>
        <div className="lg:w-5/12 md:w-6/12 w-11/12 mx-auto md:mt-8 mt-16 md:mb-20 mb-36 relative z-[9] bg-black rounded-sm p-9">
          <form onSubmit={HandleSubmit}>
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
                  Enter your email
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-black/80 md:peer-focus:text-sm peer-focus:text-4xl"
                >
                  Enter Password
                </label>
              </div>
            </div>
            <div className="w-full h-16 flex items-center">
              <p className="text-white md:text-sm text-[37px] mt-16 md:mt-0">
                Don{`'`}t have an account ?{" "}
                <span className="text-[#F73F36] font-bold hover:underline">
                  <Link href="/JoinClass">Join Class</Link>
                </span>
              </p>
            </div>
            <div className="flex justify-center md:mt-12 mt-32 mb-20 md:mb-0">
              <div className="w-full md:w-72 text-center lg:text-lg md:text-2xl text-4xl md:py-2 py-7 rounded-sm bg-[#F73F36] hover:bg-red-500 transition ease-out duration-300 text-white hover:text-white font-medium ">
                <button type="submit" disabled={loading}>
                  {loading ? "- - -" : "Login"}
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

export default Login;
