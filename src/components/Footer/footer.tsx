import React from "react";
import FooterLogo from "../../images/logo/logo-footer.svg";
import Image from "next/image";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";

function Footer() {
  return (
    <>
      <footer className='bg-white'>
        <div className='container page-padding py-24'>
          <div className='flex justify-between !text-left'>
            <div className='flex flex-col w-1/3 gap-6'>
              <div className='space-y-6'>
                <Image src={FooterLogo} alt='footer_logo' className='w-44' />
                <p className='text-[13px] text-[#646464]'>
                  Take your health and body to the next level with our
                  comprehensive program designed to help you reach your fitness
                  goals.
                </p>
              </div>
              <div className='flex flex-row text-2xl gap-4 items-center'>
                <AiOutlineTwitter className='text-sky-500 cursor-pointer' />
                <FaInstagram className='text-secondary cursor-pointer' />
                <SiFacebook className='text-blue-900 cursor-pointer' />
              </div>
              <div>
                <p className='text-sm font-medium text-[#646464]'>
                  Privacy Policy | © {new Date().getFullYear()}
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-5 relative'>
              <p className='text-xl font-bold footer-main'>Our Classes</p>

              <span className='top-[33px] absolute w-12 h-[2px] bg-[#ff0366]'></span>

              <p className='text-[sm] text-[#646464] font-medium'>
                Fitness Classes
              </p>
              <p className='text-sm text-[#646464] font-medium'>
                Aerobics Classes
              </p>
              <p className='text-sm text-[#646464] font-medium'>Power Yoga</p>
              <p className='text-sm text-[#646464] font-medium'>
                Learn Machines
              </p>
              <p className='text-sm text-[#646464] font-medium'>
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div className='flex flex-col gap-5 relative'>
              <p className='text-[22px] font-bold footer-main'>Working Hours</p>

              <span className='top-[33px] absolute w-20 h-[2px] bg-[#ff0366]'></span>

              <p className='text-sm  text-[#646464] font-bold'>
                Monday - Friday:
              </p>
              <p className='text-sm text-[#646464] font-medium'>
                7:00am - 21:00pm
              </p>
              <p className='text-sm text-[#646464] font-bold'>Saturday:</p>
              <p className='text-sm text-[#646464] font-medium'>
                7:00am - 19:00pm
              </p>
              <p className='text-sm text-[#646464] font-bold '>
                Sunday - Closed
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
