"use client";
import React, { useEffect, useState } from "react";
import LottieAnimation from "./hero/Lottieanimation";
import { useShowContentStore } from "@/store/showContentStore";
import { motion } from "framer-motion";
import Scrollanimation from "./hero/Scrollanimation";

const containerVariants2 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants2 = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const setShowContent = useShowContentStore((state) => state.setShowContent);
  const [animationComplete, setAnimationComplete] = useState(false);
  const showContent = useShowContentStore((state) => state.showContent);

  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000); // Delay of 1 second
      return () => clearTimeout(timer);
    }
  }, [animationComplete, setShowContent]);
  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        className="inline-block overflow-hidden"
        style={{ whiteSpace: "pre" }}
      >
        <motion.span
          variants={itemVariants2}
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
          className="inline-block p-1"
        >
          {word + " "}
        </motion.span>
      </motion.span>
    ));
  };
  return (
    <div className="flex px-6 justify-between w-full mb-[60px]">
      <motion.div
        initial={{ x: -600 }}
        animate={showContent ? { x: 0 } : { x: -600 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:block max-w-[600px] w-[50%] h-[600px] "
      >
        <LottieAnimation />
      </motion.div>
      <div
        className="
          lg:w-[50%]
          pt-[100px] 
          justify-between
          pl-5 flex flex-col 
        "
      >
        <div className="w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl font-bold sm:w-[70%] flex flex-col"
            onAnimationComplete={() => setAnimationComplete(true)}
          >
            <div className="overflow-hidden">
              <motion.span variants={itemVariants} className="inline-block">
                Hello, I am
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                variants={itemVariants}
                className="inline-block text-green-500"
              >
                Nurulloh
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden w-full"
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
            variants={containerVariants2}
          >
            <motion.h2 className="mt-4 text-slate-700 md:w-[70%] lg:w-full text-[20px] tracking-[-0.5px] leading-[20px] font-medium lg:text-[50px] lg:tracking-[-1.296px] lg:leading-[44px]">
              {splitText(
                "I am a frontend developer. I help you build, enhance and manage your website for the best user experience."
              )}
            </motion.h2>
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants2}
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
          className="hidden md:flex  pb-[25px] justify-end items-center"
        >
          <span className="text-[2vw] leading-[2.5vw]  lg:text-[1.5vw] lg:leading-[1.66667vw]">
            [ Scroll down ]
          </span>{" "}
          <Scrollanimation />
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
