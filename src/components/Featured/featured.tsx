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
      <section className='page-padding md:py-28 py-56 bg-white'>
        <div className='container xl:w-auto lg:w-[110%] md:w-[155%] min-w-[55rem]'>
          <div className='flex flex-col text-center items-center relative '>
            <p className='text-white font-semibold relative md:text-xs text-3xl uppercase z-10 md:p-1 p-5'>
              our featured class
            </p>
            <Image
              src={TitleRed}
              alt='text_bg'
              className='md:w-64 w-[35rem] absolute -top-3'
            />
            <h2 className='lg:text-3xl md:text-4xl text-[60px] text-black font-bold md:my-10 my-20'>
              We Are Offering Best Flexible Classes
            </h2>
          </div>
          {/* grid */}
          <div className='lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 h-full lg:mt-2 md:flex md:flex-col md:gap-5 flex flex-col  gap-10'>
            <div className='item-0-div md:min-h-max min-h-[40rem] relative '>
              <Image
                src={Cycling}
                alt='cyling'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white lg:text-2xl md:text-3xl text-6xl font-bold'>
                  Cycling
                </p>
                <p className='text-white bg-secondary md:text-lg text-3xl mt-3 md:py-1 py-3 px-5'>
                  Monday: 9:00am-10:00am
                </p>
              </div>
            </div>

            <div className='item-1-div md:min-h-max min-h-[40rem] relative '>
              <Image
                src={Karate}
                alt='karate'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white lg:text-2xl md:text-3xl text-6xl font-bold'>
                  Karate
                </p>
                <p className='text-white bg-secondary md:text-lg text-3xl mt-3 md:py-1 py-3 px-5'>
                  Tuesday: 10:00am-11:00am
                </p>
              </div>
            </div>

            <div className='item-2-div md:min-h-max min-h-[40rem] relative'>
              <Image
                src={Power}
                alt='power'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white lg:text-2xl md:text-3xl text-6xl font-bold'>
                  Power
                </p>
                <p className='text-white bg-secondary md:text-lg text-3xl mt-3 md:py-1 py-3 px-5'>
                  Wednesday: 9:00am-10:00am
                </p>
              </div>
            </div>

            <div className='item-3-div md:min-h-max min-h-[40rem] relative'>
              <Image
                src={Meditation}
                alt='meditation'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white lg:text-2xl md:text-3xl text-6xl font-bold'>
                  Meditation
                </p>
                <p className='text-white bg-secondary md:text-lg text-3xl mt-3 md:py-1 py-3 px-5'>
                  Thursday: 1:00pm-2:00pm
                </p>
              </div>
            </div>

            <div className='item-4-div md:min-h-max min-h-[40rem] relative'>
              <Image
                src={MMA}
                alt='martial arts'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white lg:text-2xl md:text-3xl text-6xl font-bold'>
                  Martial Arts
                </p>
                <p className='text-white bg-secondary md:text-lg text-3xl mt-3 md:py-1 py-3 px-5'>
                  Friday: 6:00pm-7:00pm
                </p>
              </div>
            </div>

            <div className='item-5-div md:min-h-max min-h-[40rem] relative'>
              <Image
                src={Workout}
                alt='workout'
                className='item-0 ease-in duration-[0.4s]'
              />
              <div className='absolute z-10 bottom-10 left-10'>
                <p className='text-white lg:text-2xl md:text-3xl text-6xl font-bold'>
                  Workout
                </p>
                <p className='text-white bg-secondary md:text-lg text-3xl mt-3 md:py-1 py-3 px-5'>
                  Saturday: 4:00pm-5:00pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='featured-cta flex justify-center text-left items-center  xl:w-auto lg:w-[110%] md:w-[150%] min-w-[60rem]'>
        <div className='container page-padding'>
          <div className='flex items-center'>
            <h2 className='text-white font-bold text-2xl max-w-6xl px-7'>
              We Are Always Providing Best Fitness Service For You
            </h2>
            <div className='bg-white w-44 text-center text-black/90 text-sm font-[600] p-4 hover:border hover:border-gray-500 transition duration-300 rounded-sm'>
              <Link href='#'>JOIN US ...</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
