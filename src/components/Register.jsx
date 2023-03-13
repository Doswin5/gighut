import React from 'react'
import { registerImage } from '../assets'

const Register = () => {
  const styles = {
    background: `linear-gradient(to right, rgba(132,72,231,1), rgba(147,90,240,0.8), rgba(153,99,243,0.3))`,
  }
  return (
    <div style={styles} className='lg:m-[100px] my-10 mx-4 rounded-[20px] flex lg:flex-row flex-col items-center lg:pl-16 px-6 pt-10 justify-between text-white gap-8 lg:gap-32'>
      <div className="">
        <h2 className="font-bold lg:text-[36px] text-[24px] mb-4">
          Register to start selling <br /> your service.
        </h2>
        <p className="font-normal text-[16px] lg:text-[18px] mb-10">
          Connect with our community of top companies, post high-paying jobs and get paid reliably through our secure payment system.
        </p>
        <button className="border border-white text-white bg-primary py-2 px-6 text-[12px] lg:text-[18px]">Signup For Free</button>
      </div>
      <img src={registerImage} alt="" className="" />
    </div>
  )
}

export default Register