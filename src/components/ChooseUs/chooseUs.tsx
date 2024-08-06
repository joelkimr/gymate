import VideoImg from "../../images/choose-us/main-img.png";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainingIcon from "../../images/choose-us/training.png";
import EquipmentsIcon from "../../images/choose-us/bench-press.png";
import BagIcon from "../../images/choose-us/gym-bag.png";
import BottleIcon from "../../images/choose-us/bottle-of-water.png";
import PlayImg from "../../images/choose-us/play.png";
import Image from "next/image";
import Link from "next/link";

function ChooseUs() {
  return (
    <>
      {/* <section className='choose-section py-32  xl:w-auto lg:w-[110%] md:w-[150%] min-w-[60rem] '> */}
      <section className="choose-section py-32 w-full">
        <div className="container page-padding flex lg:flex-row md:flex-col md:items-center md:gap-14">
          <div className="video-div relative w-[50%] hidden md:block">
            <Image
              src={VideoImg}
              alt="video_img"
              className="relative w-[94%] h-auto"
            />
            {/* <Image
              src={PlayImg}
              alt="play_img"
              className="absolute w-6 top-[41%] left-[43%] z-10 cursor-pointer hover:w-8"
            />
            <span className="bg-white cursor-pointer p-7 absolute rounded-full top-[38.7%] left-[39.9%]"></span> */}
          </div>

          <div className="relative lg:w-[50%] md:w-[70%] md:flex md:flex-col md:items-center">
            <p className="text-white relative z-10 md:text-xs text-3xl uppercase font-bold md:mb-14 mb-20 ml-12 md:pr-11 md:pl-0 pl-60 md:pt-0 pt-3">
              why choose us
            </p>
            <Image
              src={TitleRed}
              alt="text_bg"
              className="md:w-64 w-[35rem] absolute -top-3 md:ml-0 ml-36"
            />
            <h2 className="lg:text-4xl md:text-[3rem] text-3xl text-white font-bold leading-[1.2] max-w-3xl">
              We Can Give A Shape Of Your Body Here!
            </h2>
            <p className="lg:text-sm md:text-lg text-[#b4b4b4] mt-7 text-3xl max-w-3xl md:ml-0 ml-12">
              At <b>Gymate</b>, we are dedicated to helping you achieve the body
              of your dreams. Our expert trainers and nutritionists will work
              with you to create a personalized fitness and nutrition plan that
              helps you reach your specific goals.
            </p>

            <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-14 max-w-[44rem] mt-20 space-y-12 md:space-y-0 ml-32 md:ml-0 md:mt-0">
              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={TrainingIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl  text-3xl">
                  Free Fitness Training
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={EquipmentsIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl text-3xl">
                  Modern Gym Equipments
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={BagIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl text-3xl">
                  Gym Bag Equipments
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={BottleIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl text-3xl">
                  Fresh Bottle Watter
                </p>
              </div>
              <div className="bg-white lg:w-44 md:w-56 w-80 h-auto lg:text-base md:text-lg text-3xl text-center text-black font-[600] p-4 hover:bg-secondary hover:text-white transition duration-300 rounded-sm md:ml-48 ml-[9rem]">
                <Link href="/Schedule">OUR CLASSES</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
