import Link from "next/link";
import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer/footer";
import Target from "../images/AboutPage/target.png";
import Img3 from "../images/AboutPage/3.jpg";
import Img4 from "../images/AboutPage/4.jpg";
import Mountain from "../images/AboutPage/mountain.png";
import TitleBg from "../images/pricing/titlebg.svg";
import Background from "../images/who-we-are/background.jpg";

const About = () => {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex w-full">
          <h1 className="text-white absolute bottom-2 md:bottom-8 md:text-[30px] text-[70px] font-bold">
            About Us
          </h1>
        </div>
        <div className="relative">
          <div>
            <Image
              src={Background}
              alt="home_image"
              className="lg:min-w-[70rem] md:min-w-[155%] xl:min-w-full absolute xl:min-h-[120%] lg:min-h-[110%] md:min-h-[107%]  md:block hidden -z-30 -top-32"
            />
          </div>
          <div className="w-full flex-row justify-center xl:mx-0 lg:top-96 xl:gap-0 lg:gap-16 md:top-[73rem] top-[12prem] md:items-center mt-32 lg:min-w-[70rem] md:w-full xl:min-w-full">
            <div className="flex flex-col items-center xl:w-3/6 lg:w-3/4 md:min-w-full p-6 -ml-40 md:-ml-0 lg:-ml-12 xl:-ml-4">
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center">
                  <p className="text-white font-semibold md:text-lg text-4xl md:-mt-0 -mt-2 md:pl-0 pl-44 uppercase z-10">
                    who we are
                  </p>
                  <Image
                    src={TitleBg}
                    alt="text_bg"
                    className="md:w-64 w-[35rem] absolute -top-0 md:top-3 md:ml-0 ml-44"
                  />
                </div>
                <h2 className="md:text-4xl font-bold md:mb-4 text-6xl md:mt-9 mt-24 text-center md:ml-0 ml-36 p-6">
                  We Will Give You Strength and Health
                </h2>
                <p className="text-[#646464] md:text-lg text-[33px] md:mt-0 mt-12 text-center md:ml-0 ml-20 w-9/12 2xl:w-8/12 ">
                  At Gymate, we are dedicated to helping you achieve the body of
                  your dreams. Our expert trainers and nutritionists will work
                  with you to create a personalized fitness and nutrition plan
                  that helps you reach your specific goals.
                </p>
              </div>

              <div className="bg-black/80 lg:w-44 md:w-64 w-80 text-center lg:text-sm md:text-xl text-3xl text-white font-light md:p-4 p-7 hover:bg-secondary transition duration-300 rounded-sm mt-16 md:ml-0 ml-36">
                <Link href="/contact">CONTACT US</Link>
              </div>
            </div>
          </div>
          <div className="container page-padding py-[5rem] min-w-[60rem] xl:w-auto lg:w-[100%] md:w-full z-30">
            <div className="md:mt-[10rem] mt-20">
              <div className="md:grid md:grid-cols-2 md:grid-rows-2 w-full flex flex-col space-y-20 md:space-y-0">
                <div className="w-full bg-white h-[30rem] flex flex-col justify-center items-center text-center px-[100px]">
                  <Image
                    src={Target}
                    alt="target_img"
                    className="md:w-[9rem] w-[7rem]"
                  />
                  <h2 className="md:text-[36px] text-[60px] font-bold mt-3">
                    Our History
                  </h2>
                  <p className="md:text-[16px] text-[40px] text-[#646464] mt-5 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias autem tempore facere esse nam in rem vero
                    assumenda aperiam debitis facilis velit, optio quam
                    reiciendis suscipit enim praesentium. Ducimus, cupiditate?
                  </p>
                </div>
                <div className="w-full bg-white h-[30rem]">
                  <Image
                    src={Img3}
                    alt="about_img"
                    className="w-full h-full object-cover bg-center"
                  />
                </div>
                <div className="w-full bg-white h-[30rem]">
                  <Image
                    src={Img4}
                    alt="about_img"
                    className="w-full h-full object-cover bg-center"
                  />
                </div>

                <div className="w-full bg-white h-[30rem] flex flex-col justify-center items-center text-center px-[100px]">
                  <Image
                    src={Mountain}
                    alt="target_img"
                    className="md:w-[9rem] w-[7rem]"
                  />
                  <h2 className="md:text-[36px] text-[60px] font-bold mt-3">
                    Our Goal
                  </h2>
                  <p className="md:text-[16px] text-[40px] text-[#646464] mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nulla delectus aut enim saepe tempore illo non accusantium?
                    Officia mollitia minus at necessitatibus, nisi ratione!
                    Earum saepe officiis error amet natus.amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default About;
