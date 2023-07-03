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
      <section className='choose-section py-32 '>
        <div className='container page-padding flex flex-row'>
          <div className='video-div relative w-[50%]'>
            <Image
              src={VideoImg}
              alt='video_img'
              className='relative w-[94%] h-auto'
            />
            <Image
              src={PlayImg}
              alt='play_img'
              className='absolute w-6 top-[41%] left-[43%] z-10 cursor-pointer'
            />
            <span className='bg-white cursor-pointer p-7 absolute rounded-full top-[38.7%] left-[39.9%]'></span>
          </div>

          <div className='relative w-[50%]'>
            <p className='text-white relative z-10 text-sm uppercase font-bold mb-14 ml-12'>
              why choose us
            </p>
            <Image
              src={TitleRed}
              alt='text_bg'
              className=' w-64 absolute -top-3'
            />
            <h2 className=' text-4xl text-white font-bold leading-[1.2] max-w-3xl'>
              We Can Give A Shape Of Your Body Here!
            </h2>
            <p className='text-sm text-[#b4b4b4] mt-7 max-w-3xl'>
              At <b>Gymate</b>, we are dedicated to helping you achieve the body
              of your dreams. Our expert trainers and nutritionists will work
              with you to create a personalized fitness and nutrition plan that
              helps you reach your specific goals.
            </p>

            <div className='grid grid-cols-2 grid-rows-2 gap-14 max-w-[44rem] mt-10'>
              <div className='flex items-center gap-3'>
                <Image
                  className='bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-20 rounded-full p-3'
                  src={TrainingIcon}
                  alt='icon'
                />
                <p className='text-white font-bold text-base max-w-[150px]'>
                  Free Fitness Training
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <Image
                  className='bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-20 rounded-full p-3'
                  src={EquipmentsIcon}
                  alt='icon'
                />
                <p className='text-white font-bold base max-w-[150px]'>
                  Modern Gym Equipments
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <Image
                  className='bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-20 rounded-full p-3'
                  src={BagIcon}
                  alt='icon'
                />
                <p className='text-white font-bold text-base max-w-[150px]'>
                  Gym Bag Equipments
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <Image
                  className='bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-20 rounded-full p-3'
                  src={BottleIcon}
                  alt='icon'
                />
                <p className='text-white font-bold text-base max-w-[150px]'>
                  Fresh Bottle Watter
                </p>
              </div>
              <div className='bg-white w-44 text-center text-black font-[600] p-4 hover:bg-secondary hover:text-white transition duration-300 rounded-sm'>
                <Link href='#'>OUR CLASSES</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
