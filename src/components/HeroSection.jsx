import React from 'react'
import { curve, heroSectionImage, videoPlayIcon } from '../assets'

const HeroSection = () => {
  return (
    <div className='lg:py-[40px] py-6 flex items-center bg-[#e5d4ff2d] lg:px-[100px] px-10 gap-10'>
      <div>
        <span className="font-medium text-[15px] text-[#A2A2A2]">
          2021 BEST FREELANCE SOFTWARE AWARDS
        </span>
        <h1 className="relative font-bold text-[50px] text-black">
          Hire The <span className='text-primary'>Best </span>
          Freelancers Around The  World

          <img src={curve} alt="" className='absolute -bottom-4 left-[44%]' />
        </h1>
        <p className="font-normal text-[18px] text-dimBlack my-10">
          World’s Leading Freelance Platform, Get the best freelancers and work with top major companies.
        </p>
        <div className="flex gap-4">
          <button className="btn1">
            Hire a freelancer
          </button>
          <button className="btn2 flex gap-2 items-center">
            <img src={videoPlayIcon} alt="" />
            See how it works
          </button>
        </div>
      </div>
      <img src={heroSectionImage} alt="" />
    </div>
  )
}

export default HeroSection