import React from 'react'
import Raw_Logo from "@/assets/Raw_black_logo.svg";
import Image from "next/image";
import Menu from './Menu';
export default function NavBar() {
  return (
  <nav className=' backdrop-blur-xs z-100  w-full min-h-16 bg-none text-foreground flex items-center justify-between  py-4 lg:max-w-7xl mx-auto'> 
  <div className="relative font-medium text-xl">
    <Menu />
  </div>
  <div className=""> 
    <Image src={Raw_Logo} alt="Raw Logo" width={100} height={100} className='cursor-pointer  h-8 md:h-14' />
  </div>  
  </nav>
  )
}

