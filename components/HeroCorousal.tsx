"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function HeroCorousal() {
  const containerRef = useRef(null);
  
  // Track the scroll progress of the carousel container specifically
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Smooth width transition from 65% width to 100% full-width
  const width = useTransform(scrollYProgress, [0, 1], ["65%", "100%"]);
  
  // Scale container slightly as it rolls in
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  
  // Transition border-radius from rounded-2xl to sharp edge as it expands to full screen
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["24px", "0px"]);

  // Create background parallax by moving the image inside the viewport container
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center py-4 md:py-8 overflow-hidden min-h-[480px] md:min-h-[720px]"
    >
      <motion.div
        style={{
          width,
          scale,
          borderRadius,
        }}
        className="relative h-[480px] md:h-[720px] overflow-hidden shadow-2xl"
      >
        <motion.div
          style={{
            y: bgY,
            scale: 1.25, // Scale image up slightly so it doesn't reveal borders during parallax shift
            backgroundImage: `url('/Hero_Arch_Home.webp')`,
          }}
          className="absolute inset-0 bg-center bg-cover"
        />
        {/* Subtle overlay gradient to match premium styling */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}

