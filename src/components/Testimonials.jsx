import React, { useState } from 'react'
import { closingQuote, openingQuote } from '../assets'
import { testimonials } from '../constants'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  return (
    <div className='bg-[#FBF9FF] py-[60px] lg:px-[100px] px-4'>
      <h2 className="font-bold lg:text-[36px] text-[24px] mb-4">
        Testimonials
      </h2>
      <p className="font-normal text-[16px] lg:text-[18px] text-dimBlack mb-[100px]">
        We've had so many amazing things said about our services, here are some of them.
      </p>
      <div className="flex items-center gap-2 lg:gap-16 relative">
        <div className={`text-white ${current > 0 ? 'bg-[#404040]' : 'bg-[#40404085]'} w-10 h-10 rounded-full flex items-center justify-center text-[24px] ${current > 0 ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => {current > 0 && setCurrent(prev => prev - 1)}}>
          &lt;
        </div>
        <div className='relative w-full lg:w-[50%]'>
          <p className="font-normal text-[16px] lg:text-[18px] text-dimBlack mb-6">
            {testimonials[current].summary}
          </p>
          <p className="font-bold text-[16px] lg:text-[18px] text-dimBlack mb-10">
            {testimonials[current].testimonialName}
          </p>
          <div className="flex gap-4 lg:justify-between items-center">
            {
              testimonials.map((testimonial, idx) => {
                if (idx === current) {
                  return (
                    <div className="w-[50px] lg:w-[100px] h-2 bg-primary rounded-[20px]"></div>
                  )
                }
                return (
                  <div className="w-[50px] lg:w-[100px] h-2 bg-[#c1a2f3] rounded-[20px]"></div>
                )
              })
            }
          </div>
          <img src={openingQuote} alt="" className="absolute -top-8 lg:-top-[56px] left-0 lg:-left-[90px] lg:w-[100px] lg:h-[100px] w-8 h-8" />
          <img src={closingQuote} alt="" className="absolute -top-8 lg:-top-[86px] right-0 lg:-right-[60px] lg:w-[100px] lg:h-[100px] w-8 h-8" />
        </div>
        <div className={`text-white ${current < testimonials.length - 1 ? 'bg-[#404040]' : 'bg-[#40404085]'} w-10 h-10 rounded-full flex items-center justify-center text-[24px] ${current < testimonials.length - 1 ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => { current < testimonials.length - 1 && setCurrent(prev => prev + 1)}}>
          &gt;
        </div>
      </div>
    </div>
  )
}

export default Testimonials