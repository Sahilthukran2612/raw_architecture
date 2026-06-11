"use client";

import React, { useState } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import {X} from "lucide-react"
export default function OurExperience() {
  const [isMounted, setIsMounted] = useState("")
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.8], [-100, 0]);
  
  const variant = {
    hidden: { opacity: 0, height: 0 ,y:-80},
    visible: { opacity: 1, height: "100%" ,y:0},
  };
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
        <h1 className="font-serif text-[8.5rem] leading-tight">
          Our Expertise
        </h1>
      </motion.div>
      <div className=" block border-b border-foreground "
       onMouseEnter={()=>setIsMounted("Architecture")}
        onMouseLeave={()=>setIsMounted("")}>
        <div className=" grounp flex w-full  justify-between items-start py-4 overflow-hidden "
      >
          <h1 className="text-[4rem] font-sans ">
            Architectrual
            <br /> Design
          </h1>
          <div className="">
            {" "}
            <X size={48} className={`rotate-45`} />
          </div>
        </div>
       { isMounted == "Architecture" &&( <motion.div 
       variants={variant}
       initial="hidden"
       animate="visible"
       exit="hidden"
       transition={{duration:0.6, type:"spring" , ease:"linear"}}
       className="  grid grid-cols-2 py-[4.5rem] ">
          <div className="">
            <motion.div drag onDragEnd={() => {}} className="w-[33rem] h-[18.5rem] bg-slate-300 h-40"></motion.div>
          </div>
          <div className="block align-super space-y-[2.75rem]">
            <h2 className="text-2xl font-serif underline font-bold leading-normal">
              What we do
            </h2>
            <p className="text-2xl tracking-normal">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              <br /> Dolor sit amet consectetur adipiscing elit quisque
              faucibus.
            </p>
            <h2 className="text-2xl font-serif underline font-bold leading-normal">
              Solution
            </h2>
            <motion.ul 
            
            className="text-2xl list-disc list-inside">
              <li>ipsum </li>
              <li>Lorem</li>
              <li>dolor</li>
              <li>amet</li>
              <li>consectetur</li>
              <li>adipiscing</li>
            </motion.ul>
            <button className="bg-foreground text-background pointer-events-auto cursor-poinnter text-xs py-2.5 px-4 pr-6 rounded-full flex items-center justify-center gap-2">
              <span className="leading-1.2">Learn More</span>{" "}
              <div className="h-2 w-2 rounded-full bg-background " />
            </button>
          </div>
      </motion.div>)}
      </div>

{/* other section */}
       <div className=" block border-b border-foreground">
        <div className=" grounp flex w-full  justify-between items-start py-4 overflow-hidden">
          <h1 className="text-[4rem] font-sans ">
            Architectrual
            <br /> Design
          </h1>
          <div className="">
            {" "}
            <X size={48} className={`rotate-45`} />
          </div>
        </div>
        <div className="  grid grid-cols-2 py-[4.5rem]">
          <div className="">
            <div className="w-[33rem] h-[18.5rem] bg-slate-300 h-40"></div>
          </div>
          <div className="block align-super space-y-[2.75rem]">
            <h2 className="text-2xl font-serif underline font-bold leading-normal">
              What we do
            </h2>
            <p className="text-2xl tracking-normal">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              <br /> Dolor sit amet consectetur adipiscing elit quisque
              faucibus.
            </p>
            <h2 className="text-2xl font-serif underline font-bold leading-normal">
              Solution
            </h2>
            <ul className="text-2xl list-disc list-inside">
              <li>Lorem</li>
              <li>ipsum </li>
              <li>dolor</li>
              <li>amet</li>
              <li>consectetur</li>
              <li>adipiscing</li>
            </ul>
            <button className="bg-foreground text-background text-xs py-2.5 px-4 pr-6 rounded-full flex items-center justify-center gap-2">
              <span className="leading-1.2">Learn More</span>{" "}
              <div className="h-2 w-2 rounded-full bg-background " />
            </button>
          </div>
      </div>


      
        {/* <div className=" flex items-start gap-20">
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
            <button className="bg-foreground text-background text-xs py-2 px-2 pr-4 rounded-full flex items-center justify-center gap-2">
              <span>Get to know us</span>{" "}
              <div className="h-2 w-2 rounded-full bg-background " />
            </button>
          </div>
        </div> */}
        {/* <div className="h-[40rem] w-[30rem] bg-slate-500"></div> */}
      </div>
    </div>
  );
}
