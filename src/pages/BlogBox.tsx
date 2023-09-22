import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogBox = ({ img, title }: { img: any, title: any }) => {
    return (
        <>
            <div>
                <Image src={ img } alt="blog_img" />
                <p className="font-medium md:text-[16px] text-[23px] text-[#646464] pt-4 pb-4">
                    <i className="fa-solid fa-layer-group text-[#ff0336] text-[16px]"></i>
                    &nbsp; By <b>Author</b> | September 10, 2023 | Yoga
                </p>
                <h2 className="lg:text-[2rem] text-[3rem] font-bold mb-2">{ title }</h2>
                <p className="font-medium lg:text-[16px] text-[25px] text-[#646464] mb-8">
                    Authoritatively disseminate multimedia based total linkage through
                    market-driven methodolContinually transform integrated results
                    vis-a-vis multidisciplinary manufacture Appropriately foster
                    fullresearched innovation rather than backend supply. when an unknown
                    printer took a galley.
                </p>
                <div className='bg-secondary text-white md:w-60 w-96 h-auto text-center md:text-lg text-3xl hover:text-[15px] font-[600] p-7 md:p-4 transition duration-300 md:rounded-sm rounded-lg'>
                    <Link href='#'>PURCHASE NOW</Link>
                </div>
            </div>
        </>
    )
}

export default BlogBox