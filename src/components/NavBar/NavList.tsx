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
      <ul className="flex md:flex-row flex-col lg:gap-7 md:gap-5 md:text-white text-black/90 lg:text-sm md:text-md font-medium md:relative absolute md:space-y-0 space-y-24 md:w-auto md:h-auto w-[70rem] h-[79rem] md:border-none border-solid border-[3px] rounded-3xl bg-white opacity-95 md:bg-transparent text-center md:pt-0 pt-28 shadow-2xl md:text-xl text-5xl">
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
