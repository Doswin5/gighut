import React from 'react'
import { gighutWhite } from '../assets'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <div className='bg-dimPrimary text-white lg:py-24 pt-16 lg:px-[100px] px-4 mt-16 flex lg:flex-row flex-col lg:justify-between lg:items-start lg:gap-24 gap-16 items-center'>
      <div className="flex flex-col lg:items-start items-center">
        <img src={gighutWhite} alt="" className="w-[105px] mb-6" />
        <p className="font-normal text-[16px] lg:text-[18px]">
          World’s Leading Freelance Platform
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-between lg:w-full lg:items-start items-center">
        {
          footerLinks.map(footer => (
            <div className='flex flex-col lg:items-start items-center mb-6'>
              <h3 className="font-medium text-[16px] lg:text-[24px] mb-4">
                {footer.linkName}
              </h3>
              {
                footer.sublinks.map(sublink => (
                  <p className="font-normal text-[16px] lg:text-[18px] mb-2 cursor-pointer">
                    {sublink.sublinkname}
                  </p>
                ))
              }
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Footer