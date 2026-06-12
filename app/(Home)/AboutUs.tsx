"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

export default function AboutUs() {
  const containerRef = useRef(null);
  
  // Track scroll progress relative to this section's viewport crossing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll animations for heading
  const headerX = useTransform(scrollYProgress, [0, 0.35], [-120, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Parallax offsets for the images
  const img1Y = useTransform(scrollYProgress, [0, 0.8], [-25, 25]);
  const img2Y = useTransform(scrollYProgress, [0, 0.8], [-55, 55]);

  return (
    <section ref={containerRef} className="px-6 md:px-12 mx-auto py-16 md:py-24 min-h-screen flex flex-col justify-center overflow-hidden">
      <motion.div
        style={{
          x: headerX,
          opacity: headerOpacity,
        }}
        className="mb-8 md:mb-12"
      >
        <h1 className="font-serif text-[80px] md:text-[134px] leading-none tracking-tight">About Us</h1>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 w-full">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 lg:gap-20 w-full lg:w-auto">
          {/* Left Small Parallax Image Container */}
          <div className="relative h-[200px] w-[260px] md:h-[12.130rem] md:w-[16.5rem] overflow-hidden rounded-lg shadow-lg group shrink-0">
            <motion.div
              style={{
                y: img1Y,
                scale: 1.15,
                backgroundImage: `url('/about_us_detail.png')`,
              }}
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-120"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
          </div>
          
          {/* Copy description and CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md space-y-8 md:space-y-12"
          >
            <p className="font-sans text-[1rem] font-medium leading-relaxed tracking-wide text-foreground/80">
              We approach architecture not just as physical building, but as the framing of human experience. 
              Our work is defined by truth in materials—concrete, stone, glass, and steel—crafted with geometric 
              precision to create structures that live in harmony with their natural surroundings.
              <br />
              <br />
              Every space is sculpted by light, casting shifting shadows that mark the slow passage of time 
              and breathe raw character into everyday life.
            </p>
            <button className="group bg-foreground text-background text-xs font-semibold py-2.5 px-4 pr-6 rounded-full flex items-center justify-center gap-3 hover:bg-foreground/90 transition-all shadow-md active:scale-95 cursor-pointer">
              <span>Get to know us</span>
              <motion.div 
                className="h-2 w-2 rounded-full bg-background"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
            </button>
          </motion.div>
        </div>

        {/* Right Large Parallax Image Container */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[40rem] w-full md:w-[400px] lg:w-[30rem] overflow-hidden rounded-lg shadow-xl group self-stretch lg:self-auto">
          <motion.div
            style={{
              y: img2Y,
              scale: 1.15,
              backgroundImage: `url('/about_us_facade.png')`,
            }}
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-120"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
        </div>
      </div>
    </section>
  );
}
