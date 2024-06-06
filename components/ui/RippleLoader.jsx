"use client";

import { motion } from "framer-motion";

export default function RippleLoader() {
  const rippleVariants = {
    start: {
      opacity: 1,
      scale: 0,
    },
    end: {
      opacity: 0,
      scale: 3,
    },
  };

  const rippleTransition = {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 1,
  };

  return (
    <div className="relative z-20 flex h-[100px] flex-col items-center justify-between">
      <div className="relative h-10 w-10">
        <motion.div
          className="absolute h-full w-full rounded-full bg-indigo-500 opacity-0"
          variants={rippleVariants}
          initial="start"
          animate="end"
          transition={rippleTransition}
        ></motion.div>
        <motion.div
          className="absolute h-full w-full rounded-full bg-indigo-500 opacity-0"
          variants={rippleVariants}
          initial="start"
          animate="end"
          transition={{ ...rippleTransition, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute h-full w-full rounded-full bg-indigo-500 opacity-0"
          variants={rippleVariants}
          initial="start"
          animate="end"
          transition={{ ...rippleTransition, delay: 1 }}
        ></motion.div>
      </div>
      <p className="text-xs text-black">Loading..</p>
    </div>
  );
}
