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
      <ul className="flex md:flex-row flex-col lg:gap-7 md:gap-5 md:text-white text-black/90 lg:text-sm md:text-md font-medium md:relative absolute md:space-y-0 space-y-24 md:w-auto md:h-auto w-[72rem] -ml-0 h-[100rem] md:border-none border-solid border-[3px] rounded-3xl bg-white md:bg-transparent text-center md:pt-0 pt-40 -mt-14 md:-mt-0 shadow-2xl md:text-xl text-5xl">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/About" title="About" />
        <CustomLink href="/Gallery" title="Gallery" />
        <CustomLink href="/Schedule" title="Schedule" />
        <CustomLink href="/Blog" title="Blog" />
        <CustomLink href="/Pricing" title="Pricing" />
        <CustomLink href="/Classes" title="Classes" />
        <CustomLink href="/Contact" title="Contact" />
      </ul>
    </>
  );
}

export default NavList;
