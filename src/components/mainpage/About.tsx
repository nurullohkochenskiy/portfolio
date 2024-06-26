"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useShowContentStore } from "@/store/showContentStore";
import useLangStore from "@/store/langStore";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const About = () => {
  const showContent = useShowContentStore((state) => state.showContent);
  //!Lang
  const { language } = useLangStore();
  const translations = {
    en: {
      title: "Who am I?",
      info: `I am an 18-year-old frontend developer and software engineer. I have experience working with popular programming languages and frameworks including HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, and Bootstrap. I completed a comprehensive React.js course at the "Najot Ta'lim" educational center. In addition to my technical skills, I am proficient in multiple languages. I have advanced proficiency in both English and Uzbek, and I am conversational in Russian (B1 level).`,
    },
    uz: {
      title: "Men kimman?",
      info: `Men 18 yoshli frontend dasturchi va dasturiy injinerman. HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS va Bootstrap kabi mashhur dasturlash tillari va frameworklar bilan ishlash tajribam bor. “Najot ta’lim” o‘quv markazida React.js kursini tamomlaganman. Texnik ko'nikmalarimga qo'shimcha ravishda men ko'p tillarni yaxshi bilaman. Men ingliz va o'zbek tilini mukammal darajada va rus tilini B1 darajasida bilaman`,
    },
  };
  const t = translations[language];

  //!Lang end
  return (
    <section id="about" className="container mx-auto px-4">
      <motion.h2
        variants={fadeInAnimationVariants}
        initial="initial"
        animate={showContent ? "animate" : "initial"}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-yellow-500 p-10 text-center text-[20px]"
      >
        {t.title}
      </motion.h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-8 lg:justify-center">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pb-[15px] w-[20vw] sm:w-[17vw] md:w-[15vw] lg:w-[30%]"
        >
          <Image
            src="/images/avatar.jpg"
            alt="Example Image"
            layout="responsive"
            width={1938}
            height={1380}
            className="rounded-full lg:rounded-none"
          />
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:w-[60%] lg:pt-3"
        >
          <h2 className="text-sky-600 pb-[20px] text-[20px]">
            Nurulloh Amirmamatov
          </h2>
          <p className="text-stone-500 md:text-[17px] lg:text-[20px]">
            {t.info}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
