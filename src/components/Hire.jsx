import React from 'react'
import { curve, hireImage } from '../assets'

const Hire = () => {
  return (
    <div className='lg:px-[100px] px-4 lg:py-10 py-6 flex lg:flex-row flex-col items-center lg:gap-24 gap-6'>
      <img src={hireImage} alt="" className="w-full lg:w-[50%]" />
      <div className="">
        <h2 className="font-bold lg:text-[36px] text-[24px] mb-6">
          Hire <span className="text-primary">Freelancers</span> 
        </h2>
        <p className="relative font-normal text-[16px] lg:text-[18px] text-dimBlack mb-10">
          Find and hire top talent that fits your company's mission. Post a job to find the perfect match for your business and get new hires in front of 100s of decision makers, in just a few minutes.
          <img src={curve} alt="" className='absolute -bottom-8 left-[44%]' />
        </p>
        <button className="btn1 hover:bg-dimPrimary text-[12px] lg:text-[18px] py-2 lg:px-6 px-4">Post a Job</button>
      </div>
    </div>
  )
}

export default Hire