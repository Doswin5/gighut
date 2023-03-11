import React from 'react'
import { Link } from 'react-router-dom'
import { gighutLogo, menuIcon, searchIcon } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
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
      <div className="hidden items-center gap-6 lg:flex justify-end w-full">
        <div className="relative border px-12 h-[40px] flex items-center rounded-full w-[200px]">
          <input type="text" className="outline-none w-[150px] bg-transparent" placeholder='Search' />
          <img src={searchIcon} alt="" className="absolute top-2 left-4" />
        </div>
        <div className="flex items-center gap-4 justify-end">
          <Link to='' className='hover:text-gray-500'>
            Login
          </Link>
          <button className="btn1 hover:bg-dimPrimary">
            Sign Up
          </button>
        </div>
      </div>
      <div className="lg:hidden flex gap-4 items-center">
        <img src={searchIcon} alt="" className='h-6 w-6 cursor-pointer' />
        <img src={menuIcon} alt="" className='cursor-pointer h-10 w-8' />
      </div>
    </div>
  )
}

export default Navbar