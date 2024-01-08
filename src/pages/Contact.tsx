import React from 'react';
import Footer from '@/components/Footer/footer';

const Contact = () => {
    return (
        <>
            <section>
                <div className="login-banner relative justify-center flex min-w-[60rem] xl:w-auto lg:w-[110%] md:w-[155%]">
                    <h1 className="text-white absolute bottom-8 md:text-[30px] text-[50px] font-bold">
                        Contact
                    </h1>
                </div>
                <div className='w-full h-80 flex items-center justify-center text-4xl md:text-2xl md:font-bold  lg:min-w-[70rem] md:min-w-[73rem] min-w-[60rem] p-9'>
                    <p className='text-center'>we apologize! we will be back to you shortly. You can visit our physical address along Elizabeth Avenue inside BOOM PLAZA 4th Floor Room B2-C</p>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Contact