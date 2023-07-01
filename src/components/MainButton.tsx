import React from "react";
import Link from "next/link";

function MainButton() {
  return (
    <Link
      href='#'
      className='text-md flex justify-center items-center text-black bg-white font-[600] w-56 h-14 uppercase ml-6 hover:bg-secondary hover:text-white transition duration-300 rounded-sm'>
      our classes &nbsp;
    </Link>
  );
}

export default MainButton;
