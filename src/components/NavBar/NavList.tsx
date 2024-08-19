import Link from "next/link";
import React from "react";

const CustomLink = ({ href = "", title = "" }) => {
  return (
    <Link
      href={href}
      className="cursor-pointer hover:text-secondary transition duration-300"
    >
      {title}
    </Link>
  );
};

function NavList() {
  return (
    <>
      <ul className="flex md:flex-row flex-col lg:gap-7 md:gap-5 md:text-white text-white lg:text-[16px] md:text-md font-medium md:relative absolute md:space-y-0 space-y-24 md:w-auto md:h-auto w-[80rem] -ml-1 h-[130rem] md:border-none border-solid border-[3px] rounded-3xl bg-black md:bg-transparent text-center md:pt-0 pt-40 -mt-14 md:-mt-0 shadow-2xl md:text-xl text-5xl justify-center">
        <span className="w-1/3 border-[rgb(255,255,255,0.3)] border-solid border-2  p-7 rounded-md block md:hidden ml-[28rem]">
          <Link href="/JoinClass" className="flex items-center ">
            <h3 className="text-white text-4xl font-[600] uppercase hover:text-red-400 transition duration-500 ">
              join class now
            </h3>
          </Link>
        </span>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/About" title="About" />
        <CustomLink href="/Gallery" title="Gallery" />
        <CustomLink href="/Schedule" title="Schedule" />
        <CustomLink href="/Blog" title="Blog" />
        <CustomLink href="/Pricing" title="Pricing" />
        <CustomLink href="/Contact" title="Contact" />
      </ul>
    </>
  );
}

export default NavList;
