import React from 'react'
import { company1, company2, company3, company4, company5, company6 } from '../assets'

const Companies = () => {
  return (
    <div className='lg:px-[100px] px-4 py-6 lg:py-10 flex justify-between items-center border-b'>
      <img src={company1} alt="" className="lg:h-10 h-4" />
      <img src={company2} alt="" className="lg:h-10 h-4" />
      <img src={company3} alt="" className="lg:h-10 h-4" />
      <img src={company4} alt="" className="lg:h-10 h-4" />
      <img src={company5} alt="" className="lg:h-10 h-4" />
      <img src={company6} alt="" className="lg:h-10 h-4" />
    </div>
  )
}

export default Companies