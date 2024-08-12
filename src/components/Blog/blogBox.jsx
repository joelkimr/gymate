import Link from "next/link";
import React from "react";

function BlogBox({ date, title, description }) {
  return (
    <>
      <div className='md:w-96 w-[55rem] md:shadow-xl shadow-2xl flex flex-col px-7 py-8 hover:scale-y-105 hover:scale-x-105 hover:bg-gray-100 '>
        <p className='md:text-lg text-3xl lg:text-xs font-bold text-[#323232] border-[#323232] border-solid rounded-full border-[1px] md:w-fit w-48 px-5 py-2 mb-3'>
          {date}
        </p>
        <h3 className='md:text-xl lg:text-[17px] text-4xl font-bold py-5'>{title}</h3>
        <p className='md:text-lg lg:text-sm text-3xl text-[#646464]'>
          {description}
        </p>
        <Link
          href='/blogs'
          className='md:text-lg text-2xl lg:text-xs uppercase font-bold mt-10 md:w-44 w-60 lg:w-24 h-14 lg:h-9 bg-secondary text-white text-center md:pt-4 pt-3 lg:pt-2 rounded-lg md:rounded-sm'>
          Read more
        </Link>
      </div>
    </>
  );
}

export default BlogBox;
