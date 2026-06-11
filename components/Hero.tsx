"use client"
import React, {useRef} from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import HeroCorousal from './HeroCorousal';

 export default function Hero() {
  const ref = useRef(null)
 const {scrollYProgress} = useScroll({
  target: ref,
  offset: ["start end", "end start"]
 })

 const y = useTransform(

scrollYProgress,
[0,1],
[0, 100],
 )
  return (
    <section ref={ref}
    
    className='flex flex-col gap-12 w-full '>
      <motion.div 
      style={{
        y,
      }}
      className="  mx-auto w-full text-left md:text-center   ">
        <motion.div

          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, type: "tween" }}
          className="text-foreground text-[124px] leading-none  md:text-[176px] wrap-normal  font-serif font-light sm:leading-[1.3] tracking-normal"
        >
          Raw - Vision
        </motion.div>
        <p className="font-sans text-sm md:text-xl px-4 sm:px-0 sm:mx-auto md:w-xl w-sm  bg-clip-text bg-linear-to-br from-foreground via-foreground/30 to-foreground/10 text-transparent">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet
          consectetur adipiscing elit quisque faucibus.
        </p>
      </motion.div>
      <HeroCorousal />
    </section>
  );
}

