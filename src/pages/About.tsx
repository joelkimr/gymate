import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer/footer";
import Target from "../images/AboutPage/target.png";
import Img3 from "../images/AboutPage/3.jpg";
import Img4 from "../images/AboutPage/4.jpg";
import Mountain from "../images/AboutPage/mountain.png";

const About = () => {
  return (
    <>
      <section className='login-section'>
        <div className='login-banner relative justify-center flex min-w-[60rem] xl:w-auto lg:w-[110%] md:w-[155%]'>
          <h1 className='text-white absolute bottom-8 md:text-[30px] text-[50px] font-bold'>
            About Us
          </h1>
        </div>
        <div className='container page-padding py-[5rem] min-w-[60rem] xl:w-auto lg:w-[110%] md:w-[155%]'>
          <div className='mt-[10rem]'>
            <div className='md:grid md:grid-cols-2 md:grid-rows-2 w-full flex flex-col space-y-10 md:space-y-0'>
              <div className='w-full bg-white h-[30rem] flex flex-col justify-center items-center text-center px-[100px]'>
                <Image
                  src={Target}
                  alt='target_img'
                  className='md:w-[9rem] w-[13rem]'
                />
                <h2 className='md:text-[36px] text-[65px] font-bold mt-3'>
                  Our History
                </h2>
                <p className='md:text-[16px] text-[30px] font-medium text-[#646464] mt-5'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
              </div>
              <div className='w-full bg-white h-[30rem]'>
                <Image
                  src={Img3}
                  alt='about_img'
                  className='w-full h-full object-cover bg-center'
                />
              </div>
              <div className='w-full bg-white h-[30rem]'>
                <Image
                  src={Img4}
                  alt='about_img'
                  className='w-full h-full object-cover bg-center'
                />
              </div>

              <div className='w-full bg-white h-[30rem] flex flex-col justify-center items-center text-center px-[100px]'>
                <Image
                  src={Mountain}
                  alt='target_img'
                  className='md:w-[9rem] w-[13rem]'
                />
                <h2 className='md:text-[36px] text-[65px] font-bold mt-3'>
                  Our History
                </h2>
                <p className='md:text-[16px] text-[30px] font-medium text-[#646464] mt-5'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
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
