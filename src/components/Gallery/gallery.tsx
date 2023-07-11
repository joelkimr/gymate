import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgIcon from "../../images/gallery/bg-icon.png";
import Image from "next/image";

function Gallery() {
  return (
    <>
      <section className='relative  xl:w-auto lg:w-[110%]'>
        <Image src={BgIcon} alt='bg_img' className='w-64 absolute -top-3' />

        <div className='container page-padding py-12'>
          {/* title div -- */}
          <div className='flex flex-col text-center relative items-center '>
            <p className='text-white relative z-10 text-sm uppercase font-bold mb-10'>
              GYM GALLERY
            </p>
            <Image
              src={TitleRed}
              alt='title'
              className='w-64 absolute -top-3'
            />

            <h2 className='text-2xl font-bold mb-4'>Our Workplace Gallery</h2>
            <p className='text-[#646464] font-medium text-sm'>
              Our Workplace Gallery features modern office, team collaboration,
              and fun culture.
              <br /> Attracts talents and showcases company's work atmosphere.
            </p>
          </div>

          {/* gallery */}
          <div className='gallery-grid py-16 w-full h-auto relative '>
            <div id='item-0'></div>
            <div id='item-1'></div>
            <div id='item-2'></div>
            <div id='item-3'></div>
            <div id='item-4'></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
