"use client"
import React from 'react'
import { motion, useTransform, useScroll } from 'motion/react'
export default function AboutUs() {
    const {scrollYProgress} = useScroll();
    const x = useTransform(
        scrollYProgress,
        [0,0.8],
        [-100,0]
    )
  return (
    <div className="px-[2rem]  mx-auto py-8 h-screen ">
      <motion.div
        style={{
          x,
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, type: "tween" }}
        className="text-3xl font-bold mb-4"
      >
        <h1 className="font-serif text-[134px] leading-tight">About Us</h1>
      </motion.div>
      <div className="h-full flex justify-between items-start py-8">
        <div className=" flex items-start gap-20">
          <div className="h-[12.130rem] w-[16.5rem] bg-slate-300"></div>
          <div className="w-sm  place-self-start space-y-12">
            <p className="font-sans text-[1rem] font-medium tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit
              quisque faucibus ex sapien vitae pellentesque sem. Sem placerat in
              id cursus mi pretium tellus. Tellus duis convallis tempus leo eu
              aenean sed. <br /> <br />
              Lacus nec metus bibendum egestas iaculis massa nisl. Nisl
              malesuada lacinia integer nunc posuere ut hendrerit.
            </p>
            <button className='bg-foreground text-background text-xs py-2 px-2 pr-4 rounded-full flex items-center justify-center gap-2'><span>Get to know us</span> <div className="h-2 w-2 rounded-full bg-background "/></button>
          </div>
        </div>
        <div className="h-[40rem] w-[30rem] bg-slate-500"></div>
      </div>
    </div>
  );
}
