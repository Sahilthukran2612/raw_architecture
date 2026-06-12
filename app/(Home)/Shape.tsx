"use client";
import React from "react";
import { motion } from "motion/react";

export default function Shape() {
  return (
    <section className="h-[550px] md:h-[632px] px-6 md:px-12 py-16 md:py-20 bg-neutral-950 text-neutral-100 flex flex-col justify-between overflow-hidden relative">
      {/* Premium dark abstract background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
      
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[48px] md:text-[108px] xl:text-[128px] font-serif leading-none tracking-tight z-10"
      >
        Shape Your <br /> Raw - Vision
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-8 z-10"
      >
        <p className="text-lg md:text-3xl max-w-3xl leading-relaxed text-neutral-400 font-light">
          Let&apos;s build spaces that inspire. Collaborate with our team to bring your architectural vision to life with structural authenticity and detail.
        </p>
        
        <motion.button 
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          className="group self-start md:self-center bg-white text-black text-xs font-bold py-3.5 px-6 pr-8 rounded-full flex items-center gap-3 shadow-lg hover:bg-neutral-100 transition-colors cursor-pointer shrink-0"
        >
          <span>Get in touch</span>
          <motion.div 
            variants={{
              hover: { scale: 1.4, x: 2 }
            }}
            transition={{ type: "spring", stiffness: 350, damping: 10 }}
            className="w-2.5 h-2.5 rounded-full bg-black"
          />
        </motion.button>
      </motion.div>
    </section>
  );
}