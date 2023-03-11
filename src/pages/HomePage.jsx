import React from 'react'
import { Categories, Companies, Faq, HeroSection, Hire, Register, Testimonials, Work } from '../components'

const HomePage = () => {
  return (
    <div className='pt-[72px] lg:pt-[92px]'>
      <HeroSection />
      <Companies />
      <Hire />
      <Work />
      <Categories />
      <Testimonials />
      <Register />
      <Faq />
    </div>
  )
}

export default HomePage