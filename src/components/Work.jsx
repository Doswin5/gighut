import React from 'react'
import { chevronRight, curve, workImage } from '../assets'

const Work = () => {
  return (
    <div className='lg:px-[100px] px-4 lg:py-10 py-6 flex lg:flex-row flex-col-reverse items-center lg:gap-24 gap-6'>
      <div className="">
        <h2 className="font-bold lg:text-[36px] text-[24px] mb-6">
          Work as a <span className="text-primary">Freelancer</span> 
        </h2>
        <p className="relative font-normal text-[16px] lg:text-[18px] text-dimBlack mb-10">
          Searching for a job that suits your skills? This is the right place to start your career. Get access to an abundance of freelancing opportunities, and work with top companies on-demand.
          <img src={curve} alt="" className='absolute -bottom-8 left-[44%]' />
        </p>
        <ul className="list-disc list-inside text-gray-300">
          <li className=""><span className="text-black lg:text-[18px] text-[16px]">No signup cost</span></li>
          <li className="">
            <span className="text-black lg:text-[18px] text-[16px] mr-2">Find unlimited opportunities</span>
            <span className="text-primary text-[16px] gap-[2px] lg:inline block items-center cursor-pointer hover:text-dimPrimary"> Read more <img src={chevronRight} alt="" className='inline' /></span>
          </li>
        </ul>
        <button className="btn1 hover:bg-dimPrimary mt-10 text-[12px] lg:text-[18px] py-2 lg:px-6 px-4">Signup for Free</button>
      </div>
      <img src={workImage} alt="" className="w-full lg:w-[50%]" />
    </div>
  )
}

export default Work