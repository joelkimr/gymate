import Link from "next/link";
import React from "react";

const CustomLink = ({ href = "", title = "" }) => {
  return (
    <Link
      href={href}
      className='cursor-pointer hover:text-secondary transition duration-300'>
      {title}
    </Link>
  );
};

function NavList() {
  return (
    <>
      <ul className='flex lg:gap-7 md:gap-5 text-white lg:text-sm md:text-md font-medium'>
        <CustomLink href='/' title='Home' />
        <CustomLink href='/About' title='About' />
        <CustomLink href='/Gallery' title='Gallery' />
        <CustomLink href='/Schedule' title='Schedule' />
        <CustomLink href='/Blog' title='Blog' />
        <CustomLink href='#' title='Pricing' />
        <CustomLink href='#' title='Classes' />
        <CustomLink href='#' title='Contact' />
      </ul>
    </>
  );
}

export default NavList;
