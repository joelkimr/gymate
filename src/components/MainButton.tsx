import React from "react";
import Link from "next/link";

function MainButton() {
  return (
    <Link
      href="/Schedule"
      className="lg:text-base md:text-xl text-[38px] flex justify-center items-center text-black bg-white font-[600] lg:w-56 md:w-64 w-[25rem] lg:h-14 md:h-20 h-24 uppercase md:ml-32 ml-20 hover:bg-secondary hover:text-white transition duration-300 rounded-sm"
    >
      our classes &nbsp;
    </Link>
  );
}

export default MainButton;
