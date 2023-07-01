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
      <ul className='flex gap-7 text-white text-sm font-medium'>
        <CustomLink href='#' title='Home' />
        <CustomLink href='#' title='About' />
        <CustomLink href='#' title='Gallery' />
        <CustomLink href='#' title='Schedule' />
        <CustomLink href='#' title='Blog' />
        <CustomLink href='#' title='Pricing' />
        <CustomLink href='#' title='Classes' />
        <CustomLink href='#' title='Contact' />
      </ul>
    </>
  );
}

export default NavList;
