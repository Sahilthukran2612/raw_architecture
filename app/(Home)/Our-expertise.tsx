"use client";

import React, { useState, useRef } from "react";
import { motion, useTransform, useScroll, AnimatePresence, Variants } from "motion/react";
import { X } from "lucide-react";

const expertise = [
  {
    id: "architecture",
    title: "Architectural\nDesign",
    whatWeDo:
      "We shape spaces that breathe — blending structure with atmosphere so every room feels both considered and alive.",
    solutions: [
      "Site Analysis",
      "Concept Design",
      "3D Visualization",
      "Planning Approval",
      "Construction Docs",
    ],
  },
  {
    id: "interior",
    title: "Interior Design",
    whatWeDo:
      "From material palettes to furniture curation, we craft interiors that hold their character years after completion.",
    solutions: [
      "Space Planning",
      "Material Selection",
      "Lighting Design",
      "Furniture Curation",
      "Styling",
    ],
  },
  {
    id: "landscape",
    title: "Landscape Design",
    whatWeDo:
      "Outdoor environments designed with the same rigour as the buildings they surround — planted, paved, and purposeful.",
    solutions: [
      "Site Masterplan",
      "Planting Design",
      "Hardscape Layout",
      "Irrigation & Water",
      "Maintenance Planning",
    ],
  },
];

const imageMap: Record<string, string> = {
  architecture: "/expertise_architecture.png",
  interior: "/expertise_interior.png",
  landscape: "/expertise_landscape.png",
};

// ─── Variants ────────────────────────────────────────────────────────────────

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: {
      height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
      opacity: { duration: 0.4, delay: 0.05, ease: "easeOut" },
      y: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    y: -16,
    transition: {
      height: { duration: 0.35, ease: [0.4, 0, 1, 1] as const },
      opacity: { duration: 0.25, ease: "easeIn" },
      y: { duration: 0.25, ease: "easeIn" },
    },
  },
};

const iconVariants = {
  closed: { rotate: 45, scale: 1 },
  open: { rotate: 90, scale: 1.1 },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function OurExperience() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef(null);
  
  // Track scroll relative to this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.35], [-80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const toggle = (id: string) =>
    setActiveId((prev) => (prev === id ? null : id));

  return (
    <div ref={containerRef} className="px-6 md:px-12 mx-auto py-16 md:py-24 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* ── Heading ── */}
      <motion.div
        style={{ x, opacity }}
        className="mb-12"
      >
        <h1 className="font-serif text-[64px] md:text-[134px] leading-none tracking-tight">
          Our Expertise
        </h1>
      </motion.div>

      {/* ── Accordion ── */}
      <div className="divide-y divide-foreground border-t border-foreground">
        {expertise.map((item, index) => {
          const isOpen = activeId === item.id;

          return (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="group/item"
            >
              {/* Row header — click to toggle */}
              <button
                onClick={() => toggle(item.id)}
                className="group flex w-full items-start justify-between py-6 text-left relative focus:outline-none"
              >
                {/* Background highlight on hover */}
                <span className="absolute inset-0 bg-neutral-100/0 group-hover/item:bg-neutral-100/10 dark:group-hover/item:bg-neutral-800/10 transition-colors duration-300 pointer-events-none -mx-4 px-4 rounded-lg" />
                
                <h2 className="text-[32px] md:text-[54px] font-sans leading-tight whitespace-pre-line group-hover/item:translate-x-3 transition-transform duration-300 ease-out z-10">
                  {item.title}
                </h2>

                <motion.div
                  variants={iconVariants}
                  animate={isOpen ? "open" : "closed"}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-2 md:mt-4 z-10 mr-2"
                >
                  <X size={36} className="md:w-12 md:h-12" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={item.id + "-content"}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 pb-12 pt-2">
                      {/* Left — interactive draggable image */}
                      <div className="flex items-center justify-center lg:justify-start">
                        <motion.div
                          drag
                          dragConstraints={{
                            top: -30,
                            left: -30,
                            right: 30,
                            bottom: 30,
                          }}
                          whileDrag={{ scale: 1.04, cursor: "grabbing" }}
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="relative w-full max-w-[33rem] h-[18.5rem] overflow-hidden rounded-xl shadow-xl cursor-grab active:cursor-grabbing border border-black/5 dark:border-white/5"
                        >
                          <div
                            style={{ backgroundImage: `url(${imageMap[item.id]})` }}
                            className="absolute inset-0 bg-cover bg-center select-none pointer-events-none"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                        </motion.div>
                      </div>

                      {/* Right — description text */}
                      <div className="flex flex-col gap-8 lg:gap-10 justify-center">
                        <div>
                          <h3 className="text-xl font-serif font-bold uppercase tracking-wider text-foreground/70 mb-2">
                            What we do
                          </h3>
                          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium">
                            {item.whatWeDo}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-serif font-bold uppercase tracking-wider text-foreground/70 mb-2">
                            Key Solutions
                          </h3>
                          <ul className="text-base md:text-lg grid grid-cols-2 gap-x-4 gap-y-1.5 list-none">
                            {item.solutions.map((s) => (
                              <li key={s} className="flex items-center gap-2 font-medium">
                                <span className="h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button className="self-start group bg-foreground text-background text-xs font-bold py-2.5 px-4 pr-6 rounded-full flex items-center gap-3 hover:opacity-90 transition-all shadow-md active:scale-95 cursor-pointer">
                          <span>Learn More</span>
                          <motion.div 
                            className="h-2 w-2 rounded-full bg-background"
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// "use client";

// import React, { useState } from "react";
// import { motion, useTransform, useScroll, AnimatePresence } from "motion/react";
// import { X } from "lucide-react";
// export default function OurExperience() {
//   const [isMounted, setIsMounted] = useState("");
//   const { scrollYProgress } = useScroll();
//   const x = useTransform(scrollYProgress, [0, 0.8], [-100, 0]);

//   const variant = {
//     hidden: { opacity: 0, y: -80 },
//     visible: { opacity: 1, height: "100%", y: 0 ,
//      transition: {
//       height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
//       opacity: { duration: 0.35, delay: 0.05, ease: "easeOut" },
//       y: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
//     },
//     },
//     exit:{
//       opacity:0,
//       height:0,
//       y:-24,
//        transition: {
//       height: { duration: 0.35, ease: [0.4, 0, 1, 1] },
//       opacity: { duration: 0.2, ease: "easeIn" },
//       y: { duration: 0.25, ease: "easeIn" },
//     },
//     }
//   };
//   return (
//     <div className="px-[2rem]  mx-auto py-8 h-screen ">
//       <motion.div
//         style={{
//           x,
//         }}
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.2, type: "tween" }}
//         className="text-3xl  mb-4"
//       >
//         <h1 className="font-serif text-[8.5rem] leading-tight">
//           Our Expertise
//         </h1>
//       </motion.div>
//       <motion.div
//         animate={
//           {height:"auto"}
//         }
//         transition={{duration:0.45}}
//         className=" block border-b  border-foreground "
//         onMouseEnter={() => setIsMounted("Architecture")}
//         onMouseLeave={() => setIsMounted("")}
//       >
//         <div className=" grounp flex w-full  justify-between items-start py-4 overflow-hidden ">
//           <h1 className="text-[4rem] font-sans ">
//             Architectrual
//             <br /> Design
//           </h1>
//           <div className="">
//             {" "}
//             <X size={48} className={`rotate-45`} />
//           </div>
//         </div>
//         <AnimatePresence>
//           {isMounted == "Architecture" && (
//             <motion.div
//               variants={variant}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               // transition={{ duration: 0..45, type: "spring", ease: "linear" }}
//               className="  grid grid-cols-2 py-[4.5rem] "
//             >
//               <div className="">
//                 <motion.div
//                   drag
//                   onDragEnd={() => {}}
//                   className="w-[33rem] h-[18.5rem] bg-slate-300 h-40"
//                 ></motion.div>
//               </div>
//               <div className="block align-super space-y-[2.75rem]">
//                 <h2 className="text-2xl font-serif underline font-bold leading-normal">
//                   What we do
//                 </h2>
//                 <p className="text-2xl tracking-normal">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit.
//                   <br /> Dolor sit amet consectetur adipiscing elit quisque
//                   faucibus.
//                 </p>
//                 <h2 className="text-2xl font-serif underline font-bold leading-normal">
//                   Solution
//                 </h2>
//                 <motion.ul className="text-2xl list-disc list-inside">
//                   <li>ipsum </li>
//                   <li>Lorem</li>
//                   <li>dolor</li>
//                   <li>amet</li>
//                   <li>consectetur</li>
//                   <li>adipiscing</li>
//                 </motion.ul>
//                 <button className="bg-foreground text-background pointer-events-auto cursor-poinnter text-xs py-2.5 px-4 pr-6 rounded-full flex items-center justify-center gap-2">
//                   <span className="leading-1.2">Learn More</span>{" "}
//                   <div className="h-2 w-2 rounded-full bg-background " />
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>

//       {/* other section */}
//       <div className=" block border-b border-foreground">
//         <div className=" grounp flex w-full  justify-between items-start py-4 overflow-hidden">
//           <h1 className="text-[4rem] font-sans ">
//             Architectrual
//             <br /> Design
//           </h1>
//           <div className="">
//             {" "}
//             <X size={48} className={`rotate-45`} />
//           </div>
//         </div>
//         <div className="  grid grid-cols-2 py-[4.5rem]">
//           <div className="">
//             <div className="w-[33rem] h-[18.5rem] bg-slate-300 h-40"></div>
//           </div>
//           <div className="block align-super space-y-[2.75rem]">
//             <h2 className="text-2xl font-serif underline font-bold leading-normal">
//               What we do
//             </h2>
//             <p className="text-2xl tracking-normal">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit.
//               <br /> Dolor sit amet consectetur adipiscing elit quisque
//               faucibus.
//             </p>
//             <h2 className="text-2xl font-serif underline font-bold leading-normal">
//               Solution
//             </h2>
//             <ul className="text-2xl list-disc list-inside">
//               <li>Lorem</li>
//               <li>ipsum </li>
//               <li>dolor</li>
//               <li>amet</li>
//               <li>consectetur</li>
//               <li>adipiscing</li>
//             </ul>
//             <button className="bg-foreground text-background text-xs py-2.5 px-4 pr-6 rounded-full flex items-center justify-center gap-2">
//               <span className="leading-1.2">Learn More</span>{" "}
//               <div className="h-2 w-2 rounded-full bg-background " />
//             </button>
//           </div>
//         </div>

//         {/* <div className=" flex items-start gap-20">
//           <div className="h-[12.130rem] w-[16.5rem] bg-slate-300"></div>
//           <div className="w-sm  place-self-start space-y-12">
//             <p className="font-sans text-[1rem] font-medium tracking-wide">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit. Elit
//               quisque faucibus ex sapien vitae pellentesque sem. Sem placerat in
//               id cursus mi pretium tellus. Tellus duis convallis tempus leo eu
//               aenean sed. <br /> <br />
//               Lacus nec metus bibendum egestas iaculis massa nisl. Nisl
//               malesuada lacinia integer nunc posuere ut hendrerit.
//             </p>
//             <button className="bg-foreground text-background text-xs py-2 px-2 pr-4 rounded-full flex items-center justify-center gap-2">
//               <span>Get to know us</span>{" "}
//               <div className="h-2 w-2 rounded-full bg-background " />
//             </button>
//           </div>
//         </div> */}
//         {/* <div className="h-[40rem] w-[30rem] bg-slate-500"></div> */}
//       </div>
//     </div>
//   );
// }
