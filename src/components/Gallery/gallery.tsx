import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgIcon from "../../images/gallery/bg-icon.png";
import Image from "next/image";

function Gallery() {
  return (
    <>
      <section className="relative w-full">
        <Image src={BgIcon} alt="bg_img" className="w-64 absolute -top-3" />

        <div className="container page-padding py-12">
          <div className="flex flex-col text-center relative items-center ">
            <p className="text-white relative z-10 md:text-lg uppercase font-bold md:mb-10 text-4xl md:pt-0 pt-5 md:ml-0 ml-3">
              GYM GALLERY
            </p>
            <Image
              src={TitleRed}
              alt="title"
              className="md:w-64 w-[35rem] absolute -top-3 md:ml-0 ml-1"
            />

            <h2 className="md:text-4xl font-bold md:mb-4 text-7xl md:mt-0 mt-24">
              Our Workplace Gallery
            </h2>
            <p className="text-[#646464] font-medium md:text-lg text-4xl md:mt-0 mt-12">
              Our Workplace Gallery features modern office, team collaboration,
              and fun culture.
              <br /> Attracts talents and showcases company{`'`}s work
              atmosphere.
            </p>
          </div>

          {/* gallery */}
          <div className="gallery-grid py-16 w-full h-auto relative ">
            <div id="item-0"></div>
            <div id="item-1"></div>
            <div id="item-2"></div>
            <div id="item-3"></div>
            <div id="item-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
