import React from 'react'
import { closingQuote, openingQuote } from '../assets'

const Testimonials = () => {
  return (
    <div className='bg-[#FBF9FF] py-[60px] lg:px-[100px] px-4'>
      <h2 className="font-bold lg:text-[36px] text-[24px] mb-4">
        Testimonials
      </h2>
      <p className="font-normal text-[16px] lg:text-[18px] text-dimBlack mb-[100px]">
        We've had so many amazing things said about our services, here are some of them.
      </p>
      <div className="flex items-center gap-16 relative">
        <div className="text-white bg-[#40404085] w-10 h-10 rounded-full hidden lg:flex items-center justify-center text-[24px] cursor-pointer">
          &lt;
        </div>
        <div className='relative w-full lg:w-[50%]'>
          <p className="font-normal text-[16px] lg:text-[18px] text-dimBlack mb-6">
            I got the best freelancers for my project and final product was excellent. I'm thankful to Gighut for all the help provided, will come back again for any other projects.
          </p>
          <p className="font-bold text-[16px] lg:text-[18px] text-dimBlack mb-10">
            David, Sydney Australia
          </p>
          <div className="flex gap-4 lg:justify-between items-center">
            <div className="w-[50px] lg:w-[100px] h-2 bg-primary rounded-[20px]"></div>
            <div className="w-[50px] lg:w-[100px] h-2 bg-dimPrimary rounded-[20px]"></div>
            <div className="w-[50px] lg:w-[100px] h-2 bg-dimPrimary rounded-[20px]"></div>
            <div className="w-[50px] lg:w-[100px] h-2 bg-dimPrimary rounded-[20px]"></div>
            <div className="w-[50px] lg:w-[100px] h-2 bg-dimPrimary rounded-[20px]"></div>
          </div>
          <img src={openingQuote} alt="" className="absolute -top-8 lg:-top-[56px] left-0 lg:-left-[90px] lg:w-[100px] lg:h-[100px] w-8 h-8" />
          <img src={closingQuote} alt="" className="absolute -top-8 lg:-top-[86px] right-0 lg:-right-[60px] lg:w-[100px] lg:h-[100px] w-8 h-8" />
        </div>
        <div className="text-white bg-[#404040] w-10 h-10 rounded-full hidden lg:flex items-center justify-center text-[24px] cursor-pointer">
          &gt;
        </div>
      </div>
    </div>
  )
}

export default Testimonials