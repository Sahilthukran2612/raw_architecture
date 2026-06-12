"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import HeroCorousal from "./HeroCorousal";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax translation for the text container
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Entrance variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const titleWordVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.45,
      },
    },
  };

  return (
    <section ref={sectionRef} className="flex flex-col gap-8 w-full pt-16 md:pt-24 overflow-hidden">
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full text-left md:text-center px-6 md:px-12 flex flex-col gap-6"
      >
        <div className="overflow-hidden">
          <motion.h1
            variants={titleWordVariants}
            className="text-foreground text-[80px] leading-tight md:text-[140px] xl:text-[160px] font-serif font-light tracking-tight"
          >
            Raw - Vision
          </motion.h1>
        </div>
        
        <motion.p
          variants={subtitleVariants}
          className="font-sans text-sm md:text-lg lg:text-xl md:mx-auto md:max-w-2xl text-foreground/75 leading-relaxed"
        >
          We shape spaces that breathe — blending raw materials, structural integrity, 
          and architectural design into timeless spaces that feel both considered and alive.
        </motion.p>
      </motion.div>
      
      <HeroCorousal />
    </section>
  );
}
