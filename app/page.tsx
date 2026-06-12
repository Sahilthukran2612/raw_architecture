import Hero from '@/components/Hero'
import React from 'react'
import AboutUs from './(Home)/AboutUs'
import OurExperience from './(Home)/Our-expertise'
import Shape from './(Home)/Shape'

export default function Home() {
  return (
    <div
    className={` h-fit block text-7xl`}
    >

      <Hero />
      <AboutUs />
      <OurExperience />
      <Shape />


    </div>
  )
}
