import React, { FormEvent, useState } from "react";
import Footer from "@/components/Footer/footer";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";

const JoinClass = () => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setconfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");

  const router = useRouter();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);

      const dataCollection = collection(db, "userInfo");

      const response = await addDoc(dataCollection, {
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        user_id: user.user.uid,
      });

      if (response.id) {
        setfirstName("");
        setlastName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setconfirmPassword("");

        localStorage.setItem("user_id", user.user.uid);

        router.push("/profile");
      }

      console.log({ user });
    } catch (err) {
      console.log({ err });
      if (
        String(err) ===
        "FirebaseError: Firebase: Error (auth/email-already-in-use)."
      ) {
        setErrors("Email taken already");
      } else {
        setErrors("Unknown Error");
      }
    }
    setLoading(false);
  };

  return (
    <section className="pricing-section relative w-full">
      <div className="login-banner relative justify-center flex w-full">
        <h1 className="text-white absolute bottom-2 md:text-[30px] text-[70px] font-bold md:block hidden">
          Join Our Class
        </h1>
      </div>
      <div className="w-full flex flex-col  mx-auto relative  md:mt-20 mt-16 mb-24 gap-16 ">
        <p className="md:text-[30px] text-[70px] font-bold mx-auto md:hidden block">
          Join Our Class
        </p>
        <div className="lg:w-5/12 md:w-6/12 w-11/12 mx-auto md:mt-8 mt-16 md:mb-20 mb-36 relative z-[9] bg-black rounded-sm p-9">
          <form onSubmit={handleSignup}>
            <div className="flex flex-wrap md:flex-nowrap space-y-20 md:space-y-0 md:space-x-4 lg:space-x-6 2xl:space-x-8 mb-4">
              <div className="w-full bg-white md:h-16 h-48 rounded-sm p-3 py-5">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="off"
                    className="peer h-14 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative md:top-2 left-7 md:left-0 top-16 5xl:text-xl md:text-sm text-4xl"
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-black/80 md:peer-focus:text-sm peer-focus:text-4xl"
                  >
                    First Name
                  </label>
                </div>
              </div>
              <div className="w-full bg-white  md:h-16 h-48 rounded-sm p-3 py-5">
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="off"
                    className="peer h-14 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative md:top-2 left-7 md:left-0 top-16 5xl:text-xl md:text-sm text-4xl"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
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
            <div className="w-full bg-white  md:h-16 h-48 rounded-sm p-3 py-5 mt-20 md:mt-0">
              <div className="relative flex-1">
                <input
                  id="number"
                  name="number"
                  type="number"
                  required
                  autoComplete="off"
                  className="peer h-14 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative  md:top-2 left-7 md:left-0 top-16 5xl:text-xl md:text-sm text-4xl"
                  placeholder="please enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label
                  htmlFor="telNumber"
                  className="absolute md:left-0 left-7 -top-0 text-gray-600 md:text-sm text-4xl 5xl:text-xl transition-all md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-4xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-11 md:peer-placeholder-shown:top-2 peer-focus:-top-0 md:peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-black/80 md:peer-focus:text-sm peer-focus:text-4xl"
                >
                  Please Enter Your Telephone Number
                </label>
              </div>
            </div>
            <div className="w-full bg-white  md:h-16 h-48 rounded-sm p-3 py-5 md:mt-4 mt-20">
              <div className="relative flex-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  className="peer h-14 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative  md:top-2 left-7 md:left-0 top-16 5xl:text-xl md:text-sm text-4xl"
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
            <div className="w-full bg-white  md:h-16 h-48 rounded-sm p-3 py-5 md:mt-4 mt-20">
              <div className="relative flex-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="off"
                  min={6}
                  minLength={6}
                  className="peer h-14 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative  md:top-2 left-7 md:left-0 top-16 5xl:text-xl md:text-sm text-4xl"
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
            <div className="w-full bg-white  md:h-16 h-48 rounded-sm p-3 py-5 md:mt-4 mt-20">
              <div className="relative flex-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  min={6}
                  minLength={6}
                  autoComplete="off"
                  className="peer h-14 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative  md:top-2 left-7 md:left-0 top-16 5xl:text-xl md:text-sm text-4xl"
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
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
              <p className="text-white md:text-sm text-[37px] mt-16 md:mt-0">
                Already have an account ?{" "}
                <span className="text-[#F73F36] font-bold hover:underline">
                  <Link href="/Login">Sign in</Link>
                </span>
              </p>
            </div>
            <div className="text-white">{errors}</div>

            <div className="flex justify-center md:mt-12 mt-32 mb-20 md:mb-0">
              <div className="w-full md:w-72 text-center lg:text-lg md:text-2xl text-4xl md:py-2 py-7 rounded-sm bg-[#F73F36] hover:bg-red-500 transition ease-out duration-300 text-white hover:text-white font-medium ">
                <button type="submit">
                  {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  ) : (
                    "Sign up"
                  )}
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
