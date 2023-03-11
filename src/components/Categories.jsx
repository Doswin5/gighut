import React from 'react'
import { categories } from '../constants'

const Categories = () => {
  return (
    <div className='lg:px-[100px] px-4 py-10'>
      <h2 className="font-bold lg:text-[36px] text-[24px] mb-4">
        Browse Available Categories
      </h2>
      <p className="relative font-normal text-[16px] lg:text-[18px] text-dimBlack mb-10">
        Need Professionals? Search here
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          categories.map(category => (
            <div className="bg-[#F2EAFF] text-black flex flex-col gap-4 p-6 rounded-[16px]">
              <h3 className="font-medium text-[16px] lg:text-[24px]">
                {category.linkname}
              </h3>
              <span className="font-normal text-[14px] lg:text-[16px] text-dimBlack">
                {category.description}
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories