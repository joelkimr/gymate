import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../images/logo/logo.svg";
import Image from "next/image";
import NavList from "./NavList";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between md:py-3 py-9 px-12 fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-black" : ""
        }`}>
        <Link href='/'>
          <Image src={Logo} alt='logo_img' className='lg:w-40 md:w-56 w-96' />
        </Link>
        <div className='hidden md:block'>
          <NavList />
        </div>
        <div className='border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md'>
          <Link href='#' className='flex items-center '>
            <i className='bg-[#FF0336] text-white text-xl py-2 px-3 rounded-md'></i>
            <h3 className='text-white md:text-[11px] text-2xl font-[600] uppercase ml-2 mr-2'>
              join class now
            </h3>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
