import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../assets/logo.svg'
const Navbar = ({paje ,setPaje}) => {

    


  return (
    <nav className='
     w-screen bg-black dis select-none text-white  relative
     flex items-center justify-between p-2 px-5 h-[10vh]
     border-gray-800 border-b-[0.5px] 
     '>
      <div className='text-2xl'><img className='md:w-[50px] w-[50px]' src={Logo} alt="this is logo" /></div>
      <div>
        <ul className=' sm:flex items-center justify-around gap-10 text-gray-500 text-xl hidden'>
            <Link onClick={()=>setPaje('home')} to='/' className={`cursor-pointer
             ${paje == 'home'? 'text-blue-600': 'text-gray-500'}`}>Home</Link>
            <Link onClick={()=>setPaje('project')} to='/project' className={`
               cursor-pointer ${paje == 'project'? 'text-blue-600': 'text-gray-500'}
              `}>Projects</Link>
            <Link onClick={()=>setPaje('about')} to='/about' className={`
              cursor-pointer ${paje == 'about'? 'text-blue-600': 'text-gray-500'}
              `}>About</Link>
              <Link onClick={()=>setPaje('contact')} to='/contact' className={`
              cursor-pointer ${paje == 'contact'? 'text-blue-600': 'text-gray-500'}
              `}>Contact</Link>
        </ul>
        <details className=' absolute  sm:hidden top-2  right-0 text-xl bg-black p-3
        border-[0.5px]
         border-gray-800 rounded-lg '>
          <summary className='flex items-center justify-end gap-2 cursor-pointer marker:content-none'><RxHamburgerMenu/></summary>
          <ul className="   bg-base-100 rounded-t-none p-2 gap-2 flex flex-col ">
            <li>
              <Link onClick={()=>setPaje('home')} to='/' className={`cursor-pointer
                   ${paje == 'home'? 'text-blue-600': 'text-gray-500'}`}>
                    home</Link></li>
            <li><Link onClick={()=>setPaje('project')} to='/project' className={`
               cursor-pointer ${paje == 'project'? 'text-blue-600': 'text-gray-500'}
              `}>Projects</Link></li>
            <li><Link onClick={()=>setPaje('about')} to='/about' className={`
              cursor-pointer ${paje == 'about'? 'text-blue-600': 'text-gray-500'}
              `}>about</Link></li>
              <li>
                <Link onClick={()=>setPaje('contact')} to='/contact' className={`
              cursor-pointer ${paje == 'contact'? 'text-blue-600': 'text-gray-500'}
              `}>Contact</Link>
              </li>

          </ul>
        </details>
      </div>
    </nav>
  )
}

export default Navbar
