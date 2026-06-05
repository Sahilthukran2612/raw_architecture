"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { MenuItems } from "@/constants/Menu";
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(Object.keys(MenuItems)[0]);

  return (
    <motion.div
      onHoverStart={() => setIsOpen(true)}
      
      transition={{ duration: 2, type: "spring" }}
      animate={{ opacity: 1, scale: 1 }}
      className=" absolute h-fit  -top-5 cursor-pointer pr-4 pl-2 bg-[#eaebeb] rounded-sm py-1 transition-all duration-1200 ease-in-out flex flex-row-reverse items-start justify-between w-fit "
    >

        <MenuCross isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? (
        <motion.div
          className=""
          transition={{ duration: 2, type: "tween", ease: "linear" }}
        >
          {Object.entries(MenuItems).map(([key, value]) => (
            <motion.a
              key={key}
              href={value}
              initial={{ opacity: 0, scale: 0.95 , x: -10}}
              animate={{ opacity: 0.6, scale: 1 , x: 0 }}
              exit={{ opacity: 0, scale: 0.95 , x: -10}}
              whileHover={{ opacity: 1,scale: 1.01 }}
              transition={{ duration: 0.3, type: "tween", ease: "linear", delay: 0.09 * Object.keys(MenuItems).indexOf(key) }}
              className="block text-xl font-medium text-foreground opacity-60 hover:opacity-100 cursor-pointer animate-fade-in"
             
              onClick={(e) => {
                e.stopPropagation();
                setIsSelected(key);
                // setIsOpen(false);
              }}
            >
              {key}
            </motion.a>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="text-xl font-medium text-foreground opacity-100 animate-fade-in"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, type: "tween", ease: "linear" }}
          
        >
          {isSelected}
        </motion.div>
      )}
    </motion.div>
  );
}

const MenuCross = ({ isOpen , setIsOpen}: { isOpen: boolean , setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <motion.div
      className=" relative flex flex-col items-center justify-center w-6 h-6 pl-2 opacity-180 cursor-pointer"
      //   initial={{ opacity: 1, rotate: 0 , x: 0 }}
      //   animate={{ opacity: 0.6, rotate: 0 , x: 0 }}
      //     exit={{ opacity: 1, rotate: 0 , x: 0 }}
      //     onClick={{ rotate: 90 , x: -10 }}
      onClick={(e) => {
        e.stopPropagation();
        // setIsSelected(key);
        setIsOpen(false);
      }}
    >
      <motion.div
        className={`w-4 h-[2px] bg-foreground `}
        transition={{ duration: 0.2, type: "tween", ease: "linear" }}
        animate={{ rotate: isOpen ? 45 : 0 , x: 0 , y: isOpen ? 0 : -2 }}
      />
      <motion.div
        className={`w-4 h-[2px] bg-foreground  `}
        transition={{ duration: 0.2, type: "tween", ease: "linear" }}
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -1.67:2 }}

      />
    </motion.div>
  );
};