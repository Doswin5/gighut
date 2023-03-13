import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { gighutLogo, menuIcon, closeIcon, searchIcon } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='px-4 lg:px-[100px] py-[20px] lg:py-6 flex items-center justify-between text-black bg-[#FBF9FF] border-b fixed left-0 right-0 z-50'>
      <div className="">
        <Link to='/' className=''>
          <img src={gighutLogo} alt="" className='lg:w-[200px] lg:h-5' />
        </Link>
      </div>
      <div className="lg:flex hidden items-center gap-10 w-full justify-center ml-24">
        {
          navLinks.map(navLink => (
            <Link to='' className='hover:text-gray-500'>
              {navLink.linkname}
            </Link>
          ))
        }
      </div>
      <div className="items-center gap-6 lg:flex justify-end w-full">
        <div className="lg:border px-4 h-[40px] flex items-center lg:flex-row flex-row-reverse rounded-full lg:w-[200px] gap-4">
          <img src={searchIcon} alt="" className="cursor-pointer" />
          <input type="text" className="outline-none lg:w-[150px] w-16 bg-transparent text-[12px] lg:text-[18px]" placeholder='Search' />
        </div>
        <div className="lg:flex hidden items-center gap-4 justify-end">
          <Link to='' className='hover:text-gray-500'>
            Login
          </Link>
          <button className="btn1 hover:bg-dimPrimary text-[12px] lg:text-[18px] py-2 lg:px-6 px-4">
            Sign Up
          </button>
        </div>
      </div>
      <div className="lg:hidden flex items-center">
        <img src={toggle ? closeIcon : menuIcon} alt="" className='cursor-pointer h-8 w-10' onClick={() => setToggle(prev => !prev)} />
        <div
          className={`${toggle ? 'flex' : 'hidden'} justify-center pt-6 px-6 bg-black text-white absolute top-20 right-0 mx-4 my-2 min-w-[60px] rounded-xl sidebar`}
        >
          <ul
            className="list-none items-center flex flex-col gap-[24px] pb-[24px]"
          >
            {
              navLinks.map(navLink => (
                <Link to='' className='hover:text-gray-500 text-[16px]' onClick={() => setToggle(prev => !prev)}>
                  {navLink.linkname}
                </Link>
              ))
            }
            <div className="flex sm:flex-row flex-col items-center gap-[24px] sm:gap-[40px]">
              <Link 
                to='' className='hover:text-gray-500 text-[16px]'
                onClick={() => setToggle(prev => !prev)}
              >
                Login
              </Link>
              <button 
                className="btn1 hover:bg-dimPrimary text-[12px] lg:text-[18px] py-2 lg:px-6 px-4"
                onClick={() => setToggle(prev => !prev)}
              >
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar