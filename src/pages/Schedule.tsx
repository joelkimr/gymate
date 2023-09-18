import React from 'react'

const Schedule = () => {
  return (
    <>
    <section>
    <div className='login-banner relative justify-center flex min-w-[60rem] xl:w-auto lg:w-[110%] md:w-[155%]'>
          <h1 className='text-white absolute bottom-8 md:text-[30px] text-[50px] font-bold'>
            Schedule Day
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
        {['Monday', 'Tuersday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, key) => {
            return (
                <button
                key={key}
                className='inline-flex items-center justify-center text-center md:text-[18px] text-[38px] border border-solid border-[#dee2e6] font-medium rounded-md bg-[#ff0336] text-white'>
                    {day}
                </button>
            )
        })}
        </div>
    </section>
    </>
  )
}

export default Schedule