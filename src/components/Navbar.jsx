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
      <div className="items-center gap-6 lg:flex justify-end w-full">
        <div className="lg:border px-4 h-[40px] flex items-center lg:flex-row flex-row-reverse rounded-full lg:w-[200px] gap-4">
          <img src={searchIcon} alt="" className="cursor-pointer" />
          <input type="text" className="outline-none lg:w-[150px] w-24 bg-transparent" placeholder='Search' />
        </div>
        <div className="lg:flex hidden items-center gap-4 justify-end">
          <Link to='' className='hover:text-gray-500'>
            Login
          </Link>
          <button className="btn1 hover:bg-dimPrimary">
            Sign Up
          </button>
        </div>
      </div>
      <div className="lg:hidden flex items-center">
        <img src={menuIcon} alt="" className='cursor-pointer h-10 w-8' />
      </div>
    </div>
  )
}

export default Navbar