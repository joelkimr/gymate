import React from "react";
import Link from "next/link";

function MainButton() {
  return (
    <Link
      href="/Schedule"
      className="lg:text-base md:text-xl text-5xl flex justify-center items-center text-black bg-white font-[600] lg:w-56 md:w-64 w-[28rem] lg:h-14 md:h-20 h-32 uppercase md:ml-32 ml-20 hover:bg-secondary hover:text-white transition duration-300 rounded-sm"
    >
      our classes &nbsp;
    </Link>
  );
}

export default MainButton;
