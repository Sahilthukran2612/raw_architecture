import React from 'react'
import Raw_Logo from "@/assets/Raw_black_logo.svg";
import Image from "next/image";
import Menu from './Menu';
export default function NavBar() {
  return (
  <nav className='relative  w-full min-h-16 bg-none text-foreground flex items-center justify-between  py-4 lg:max-w-7xl mx-auto'> 
  <div className="relative font-medium text-xl">
    <Menu />
  </div>
  <div className=""> 
    <Image src={Raw_Logo} alt="Raw Logo" height={`22 md:56`}  className='cursor-pointer' />
  </div>  
  </nav>
  )
}

