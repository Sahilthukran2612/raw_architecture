"use client"
import React, { useRef } from 'react'
import { motion, useScroll ,  useTransform } from 'motion/react'

export default function HeroCorousal() {
   const ref = useRef(null)
    const {scrollYProgress} = useScroll({
      target: ref,
      offset:["start end", "end start"]
    });
    
    const width = useTransform(
        scrollYProgress,
        [0,0.5],
        ["20%","100%"]
    )
    const y = useTransform(
      scrollYProgress,
      [0,1],
      [200,-200]
    )
    const height = useTransform(
        scrollYProgress,
        [0,1],
        ["480px","1080px"]
    )


  return (
    <motion.div
    ref={ref}
      style={{
        width,
        height,
        y,
        backgroundImage: `url('/Hero_Arch_Home.webp')`,
      }}
      className={`  bg-center bg-cover rounded-sm  mx-auto`}
    ></motion.div>
  );
}

