import React from "react";
import Link from "next/link";

function CtaBanner() {
  return (
    <>
      <section className='cta-section  h-auto  xl:w-full lg:w-[110%]'>
        <div className='container page-padding py-16 text-white'>
          <h2 className='text-4xl font-bold'>Get More Inquiries ?</h2>
          <br />
          <h3 className='text-2xl font-bold mb-9'>
            <span className='text-[#FF0336]'>Call:</span> + XX XXX XXX XX
          </h3>
          <div className='bg-white w-44 text-center text-black/90 text-sm font-[600] p-4 hover:bg-secondary hover:text-white transition duration-300 rounded-sm'>
            <Link href='#'>JOIN US ...</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CtaBanner;
