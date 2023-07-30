import Link from "next/link";
import React from "react";

function BlogBox({ date, title, description }) {
  return (
    <>
      <div className='md:w-96 w-[55rem] md:shadow-xl shadow-2xl flex flex-col px-7 py-8 hover:scale-y-105 hover:scale-x-105 hover:bg-gray-100 '>
        <p className='md:text-xs text-2xl font-bold text-[#323232] border-[#323232] border-solid rounded-full border-[1px] md:w-fit w-48 px-5 py-2 mb-3'>
          {date}
        </p>
        <h3 className='md:text-lg text-3xl font-bold py-5'>{title}</h3>
        <p className='md:text-sm text-2xl text-[#646464] font-medium'>
          {description}
        </p>
        <Link
          href='#'
          className='md:text-base text-xl uppercase font-bold mt-10 md:w-44 w-52 h-14 bg-secondary text-white text-center pt-4 rounded-lg md:rounded-sm'>
          Read more &nbsp;
        </Link>
      </div>
    </>
  );
}

export default BlogBox;
