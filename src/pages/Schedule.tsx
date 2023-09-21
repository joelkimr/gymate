import React, { useState } from 'react';
import Footer from '@/components/Footer/footer';

const Schedule = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
    <section>
    <div className='login-banner relative justify-center flex min-w-[60rem] xl:w-auto lg:w-[110%] md:w-[155%]'>
          <h1 className='text-white absolute bottom-8 md:text-[30px] text-[50px] font-bold'>
            Schedule by Day
          </h1>
        </div>
        <div className="w-auto flex flex-wrap gap-4 justify-center mt-[4rem]">
        {['Monday', 'Tuersday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, key) => {
            return (
                <button
                key={key}
                onClick={() => {
                    setSelected(key);

                    if(day === 'Monday') {
                        <RowOne/>
                    }
                }}
                className={`w-36 h-10 inline-flex items-center justify-center text-center md:text-[16px] text-[38px] border border-solid border-[#dee2e6] font-medium rounded-3xl  ease-in duration-300 hover:shadow-2xl ${ selected === key ? "bg-[#ff0336] text-white" : "bg-none text-black"}`}>
                    {day}
                </button>
            )
        })}
        </div>
        <div className="mt-[3rem] flex justify-center">
             <RowOne />       
          </div>
          <Footer />
    </section>
    </>
  )
}

export default Schedule












const RowOne = () => {
     return (
        <div className="flex flex-col gap-3">

        <ul className="flex justify-between w-full">
  
             <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                 Class Name
                </p>
             <p className="text-[18px] text-black font-bold mt-3">Fitness</p>
            </li>
  
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
               <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
               <p className="text-[18px] text-black font-bold mt-3">
                    9:00am - 10:00am
               </p>
            </li>
  
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
            <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
            <p className="text-[18px] text-black font-bold mt-3">
                 David Park
            </p>
            </li>
           <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex justify-end">
               <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200">
                   Join Now
               </button>
            </li>
            </ul>

         <ul className="flex justify-between w-full">
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">
                Body Building
              </p>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                10:00pm - 11:00pm
              </p>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">
                John Wick
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex justify-end">
              <button
                className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 "
              >
                Join Now
              </button>
            </li>
          </ul>
          <ul className="flex justify-between w-full">
        
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Running</p>
            </li>
          
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                4:00pm - 5:00pm
              </p>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Nicky John
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex justify-end">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200">
                Join Now
              </button>
            </li>
          </ul>
          <ul className="flex justify-between w-full">
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <p className="text-[18px] text-black font-bold mt-3">Cycling</p>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                6:00pm - 7:00pm
              </p>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Trainer</p>
              <p className="text-[18px] text-black font-bold mt-3">
                Robert Louis
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center flex justify-end">
              <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200">
                Join Now
              </button>
            </li>
          </ul>
        </div>
 )
}