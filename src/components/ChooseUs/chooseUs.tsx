import VideoImg from "../../images/choose-us/main-img.png";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainingIcon from "../../images/choose-us/training.png";
import EquipmentsIcon from "../../images/choose-us/bench-press.png";
import BagIcon from "../../images/choose-us/gym-bag.png";
import BottleIcon from "../../images/choose-us/bottle-of-water.png";
import Image from "next/image";
import Link from "next/link";

function ChooseUs() {
  return (
    <>
      <section className="choose-section py-32 w-full">
        <div className="container page-padding flex lg:flex-row md:flex-col md:items-center md:gap-14">
          <div className="video-div relative w-[50%] hidden md:block">
            <Image
              src={VideoImg}
              alt="video_img"
              className="relative w-[94%] h-auto"
            />
          </div>

          <div className="relative w-full flex flex-col items-center lg:w-1/2 md:w-[70%] md:flex md:flex-col md:items-center">
            <p className="text-white relative z-10 md:text-lg text-4xl uppercase font-bold md:mb-14 mb-20 lg:text-sm ml-[5rem] lg:ml-12 md:pr-11 md:pl-0 pl- md:pt-0 pt-3">
              why choose us
            </p>
            <Image
              src={TitleRed}
              alt="text_bg"
              className="md:w-64 w-[35rem] lg:w-44 absolute -top-3 lg:-top-1 md:ml-0 ml-20"
            />
            <h2 className="lg:text-4xl md:text-[3rem] text-6xl text-white font-bold stext-center">
              We Can Give A Shape Of Your Body Here!
            </h2>
            <p className="lg:text-sm md:text-lg text-[#b4b4b4] mt-28 md:mt-9 text-4xl md:ml-0 ml-12">
              At <b>Gymate</b>, we are dedicated to helping you achieve the body
              of your dreams. Our expert trainers and nutritionists will work
              with you to create a personalized fitness and nutrition plan that
              helps you reach your specific goals.
            </p>

            <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-2 md:gap-14 gap-11 mt-28 space-y-12 md:space-y-0 md:ml-0 md:mt-14">
              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={TrainingIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl  text-4xl">
                  Free Fitness Training
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={EquipmentsIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl text-4xl">
                  Modern Gym Equipments
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={BagIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl text-4xl">
                  Gym Bag Equipments
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 md:w-20 w-32 rounded-full p-3"
                  src={BottleIcon}
                  alt="icon"
                />
                <p className="text-white font-bold lg:text-base md:text-xl text-4xl">
                  Fresh Bottle Watter
                </p>
              </div>
            </div>
            <div className="mt-20 md:mt-12">
              <div className="bg-white lg:w-44 md:w-56 w-96 h-auto lg:text-base md:text-xl text-4xl text-center text-black font-[600] p-6 hover:bg-secondary hover:text-white transition duration-300 rounded-sm">
                <Link href="/schedule">OUR CLASSES</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
