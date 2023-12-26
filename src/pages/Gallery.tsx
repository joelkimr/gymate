import Footer from "@/components/Footer/footer";
import Image from "next/image";
import React, { useState } from "react";
import { galleryImg } from "../components/GalleryFiles";

const Gallery = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(8);
  const [selected, setSelected] = useState(0);

  return (
    <>
      <section>
        <div className='login-banner relative justify-center flex min-w-[60rem] xl:w-auto lg:w-[110%] md:w-[155%]'>
          <h1 className='text-white absolute bottom-8 md:text-[30px] text-[50px] font-bold'>
            Gallery
          </h1>
        </div>
        <div className='container page-padding py-[5rem]'>
          <div className='grid lg:grid-cols-3 gap-7 md:grid-cols-2 min-w-[55rem] xl:w-auto lg:w-[110%] md:w-[160%] '>
            {galleryImg.slice(min, max).map((image) => (
              <div key={image.id}>
                <Image
                  alt='gallery_img'
                  className='w-full h-auto'
                  src={image.img}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center gap-3 mt-3 min-w-[60rem] xl:w-auto lg:w-[110%] md:w-[155%]'>
          {[1, 2].map((page, key) => {
            return (
              <button
                key={key}
                onClick={() => {
                  setSelected(key);

                  if (page === 1) {
                    setMin(0);
                    setMax(8);
                  }
                  if (page === 2) {
                    setMin(8);
                    setMax(galleryImg.length);
                  }
                }}
                className={`inline-flex items-center justify-center text-center md:text-[18px] text-[38px] border border-solid border-[#dee2e6] md:w-[48px] md:h-[45px] w-[78px] h-[75px] font-medium rounded-md ${
                  selected === key
                    ? "bg-[#ff0336] text-white"
                    : "bg-none text-black"
                }`}>
                {page}
              </button>
            );
          })}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Gallery;
