import Link from "next/link";
import React from "react";

function BlogBox({ date, title, description }) {
  return (
    <>
      <div className='w-96 shadow-xl flex flex-col px-7 py-8 border hover:scale-y-105 hover:scale-x-105 hover:bg-gray-100'>
        <p className='text-xs font-bold text-[#323232] border-[#323232] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-3'>
          {date}
        </p>
        <h3 className='text-lg font-bold py-5'>{title}</h3>
        <p className='text-sm text-[#646464] font-medium'>{description}</p>
        <Link
          href='#'
          className='text-sm uppercase font-bold mt-10 w-44 h-14 bg-secondary text-white text-center pt-4'>
          Read more &nbsp;
        </Link>
      </div>
    </>
  );
}

export default BlogBox;
