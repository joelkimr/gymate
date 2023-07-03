import TitleRed from "../../images/who-we-are/title-bg.svg";
import Image from "next/image";
import Cycling from "../../images/features/cycling.jpg";
import Karate from "../../images/features/karate.jpg";
import Power from "../../images/features/power.jpg";
import Meditation from "../../images/features/meditation.jpg";
import MMA from "../../images/features/mma.jpg";
import Workout from "../../images/features/workout.jpg";
import Link from "next/link";

function Featured() {
  return (
    <>
      <section id='featured' className='page-padding py-28 bg-white'>
        <div className='container'>
          <div className='flex flex-col text-center items-center relative '>
            <p className='text-white font-semibold relative text-xs uppercase z-10 p-1'>
              our featured class
            </p>
            <Image
              src={TitleRed}
              alt='text_bg'
              className=' w-64 absolute -top-3'
            />
            <h2 className='text-3xl text-black font-bold my-10'>
              We Are Offering Best Flexible Classes
            </h2>
          </div>
          {/* grid */}
          <div className='grid grid-cols-4 grid-rows-2 gap-7 h-full mt-2'>
            <div className='item-0-div relative'>
              <Image
                src={Cycling}
                alt='cyling'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white text-2xl font-bold'>Cycling</p>
                <p className='text-white bg-secondary text-sm mt-3 py-1 px-5'>
                  Wednesday: 9:00am-10:00am
                </p>
              </div>
            </div>

            <div className='item-1-div relative'>
              <Image
                src={Karate}
                alt='karate'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white text-2xl font-bold'>Karate</p>
                <p className='text-white bg-secondary text-sm mt-3 py-1 px-5'>
                  Friday: 10:00am-11:00am
                </p>
              </div>
            </div>

            <div className='item-2-div relative'>
              <Image
                src={Power}
                alt='power'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white text-2xl font-bold'>Power</p>
                <p className='text-white bg-secondary text-sm mt-3 py-1 px-5'>
                  Saturday: 9:00am-10:00am
                </p>
              </div>
            </div>

            <div className='item-3-div relative'>
              <Image
                src={Meditation}
                alt='meditation'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white text-2xl font-bold'>Meditation</p>
                <p className='text-white bg-secondary text-sm mt-3 py-1 px-5'>
                  Friday: 1:00pm-2:00pm
                </p>
              </div>
            </div>

            <div className='item-4-div relative'>
              <Image
                src={MMA}
                alt='martial arts'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white text-2xl font-bold'>Martial Arts</p>
                <p className='text-white bg-secondary text-sm mt-3 py-1 px-5'>
                  Sunday: 6:00pm-7:00pm
                </p>
              </div>
            </div>

            <div className='item-5-div relative'>
              <Image
                src={Workout}
                alt='workout'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white text-2xl font-bold'>Workout</p>
                <p className='text-white bg-secondary text-sm mt-3 py-1 px-5'>
                  Monday: 4:00pm-5:00pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='featured-cta flex justify-center text-left items-center'>
        <div className='container page-padding'>
          <div className='flex items-center'>
            <h2 className='text-white font-bold text-2xl max-w-6xl px-7'>
              We Are Always Providing Best Fitness Service For You
            </h2>
            <div className='bg-black w-44 text-center text-white font-[600] p-4 hover:text-red-200 transition duration-300 rounded-sm'>
              <Link href='#'>TAKE A TOUR</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
