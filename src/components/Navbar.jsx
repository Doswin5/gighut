import React from 'react'
import { Link } from 'react-router-dom'
import { gighutLogo, menuIcon, searchIcon } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <div className='px-4 md:px-10 lg:px-[100px] py-[20px] lg:py-6 flex items-center justify-between text-black bg-[#FBF9FF] border-b border-[] fixed left-0 right-0'>
      <Link to='/'>
        <img src={gighutLogo} alt="" />
      </Link>
      <div className="lg:flex hidden items-center gap-10">
        {
          navLinks.map(navLink => (
            <Link to='' className='hover:text-gray-500'>
              {navLink.linkname}
            </Link>
          ))
        }
      </div>
      <div className="hidden items-center gap-10 lg:flex">
        <div className="relative border px-12 h-[40px] flex items-center rounded-full">
          <input type="text" className="outline-none bg-transparent" placeholder='Search' />
          <img src={searchIcon} alt="" className="absolute top-2 left-4" />
        </div>
        <div className="flex items-center gap-4">
          <Link>Login</Link>
          <button className="btn1 hover:bg-dimPrimary">
            Sign Up
          </button>
        </div>
      </div>
      <div className="lg:hidden flex gap-4 items-center">
        <img src={searchIcon} alt="" className='h-6 w-6' />
        <img src={menuIcon} alt="" />
      </div>
    </div>
  )
}

export default Navbar