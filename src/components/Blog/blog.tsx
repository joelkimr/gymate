import React from "react";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import Image from "next/image";
// import BlogBox from "./BlogBox";

function Blog() {
  return (
    <>
      <section id='blog' className='bg-white '>
        <div className='container page-padding py-24'>
          {/* title div -- */}
          <div className='flex flex-col text-center relative items-center'>
            <p className='text-white relative z-10 text-sm uppercase font-semibold mb-8'>
              latest blog
            </p>
            <Image
              src={TitleRed}
              alt='text_bg'
              className=' w-64 absolute -top-3'
            />

            <h2 className='text-2xl text-black font-bold'>Our Recent News</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
