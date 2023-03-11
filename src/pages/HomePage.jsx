import React from 'react'
import { Companies, HeroSection } from '../components'

const HomePage = () => {
  return (
    <div className='pt-[72px] lg:pt-[92px]'>
      <HeroSection />
      <Companies />
    </div>
  )
}

export default HomePage