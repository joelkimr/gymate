import React from "react";
import Link from "next/link";

function MainButton() {
  return (
    <Link
      href='#'
      className='lg:text-md md:text-xl flex justify-center items-center text-black bg-white font-[600] lg:w-56 md:w-64 lg:h-14 md:h-20 uppercase ml-6 hover:bg-secondary hover:text-white transition duration-300 rounded-sm'>
      our classes &nbsp;
    </Link>
  );
}

export default MainButton;
