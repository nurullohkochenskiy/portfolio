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
const Works = () => {
  const showContent = useShowContentStore((state) => state.showContent);
  //!Lang
  const { language } = useLangStore();
  const translations = {
    en: {
      title: "Works",
      work: {
        project: "Project",
        year: "Year",
        direction: "Direction",
        usedthings: "Framework & Libraries",
        viewwebsite: "View website",
        sourcecode: "Source code",
      },
    },
    uz: {
      title: "Proyektlar",
      work: {
        project: "Proyekt",
        year: "Yil",
        direction: "Yo'nalish",
        usedthings: "Framework & Kutubxonalar",
        viewwebsite: "Saytni ko'rish",
        sourcecode: "Kod manbasi",
      },
    },
  };
  const t = translations[language];

  //!Lang end
  const privateWebMSG = () => {
    alert("Website is sold. For verifying purposes, please contact me");
  };

  return (
    <section id="works">
      <motion.h2
        variants={fadeInAnimationVariants}
        initial="initial"
        animate={showContent ? "animate" : "initial"}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-yellow-500 p-10 text-center text-[20px]"
      >
        {t.title}
      </motion.h2>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView={showContent ? "animate" : "initial"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:flex items-start justify-center mx-auto lg:gap-[1.38889vw] mb-20"
      >
        <div className="p-[4.44444vw]  py-10 lg:w-[14.0278vw] lg:p-0">
          <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
            {t.work.project}
          </p>
          <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
            Afsona tour
          </h3>
        </div>
        <div className="p-[4.44444vw] lg:p-0  lg:w-[44.8611vw] ">
          <Image
            src="/images/afsona.png"
            alt="Afsona tour website"
            layout="responsive"
            width={1938}
            height={1380}
          />
        </div>
        <div className="p-[4.44444vw] lg:w-[29.4444vw] lg:p-0">
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              {t.work.year}
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              2024
            </h3>
          </div>
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              {t.work.direction}
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              Travel agency
            </h3>
          </div>
          <div>
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              {t.work.usedthings}
            </p>
            <div
              className="flex  [flex-flow:wrap] gap-[2vw]  sm:gap-[1.5vw] md:gap-[1.55556vw] lg:gap-[.555556vw]
            text-[3.46667vw] leading-[4vw]    sm:text-[2vw] sm:leading-[3vw] md:text-[1.8vw] md:leading-[3vw] lg:text-[.972222vw] lg:leading-[1.66667vw]"
            >
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Next.JS
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Zustand
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                scss
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                i18next
              </div>
            </div>
          </div>
          <div className="flex justify-center px-10 pt-10 gap-5 lg:gap-2 xl:gap-5">
            <a
              className="flex items-center text-[4vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw] px-3 py-1 border border-stone-400 rounded"
              href="https://afsonatour.uz"
              target="_blank"
            >
              <Image
                src="/images/eye.webp"
                alt="Example Image"
                layout="fixed"
                width={24}
                height={24}
              />
              <span className="ml-2">{t.work.viewwebsite}</span>
            </a>
            <div
              onClick={privateWebMSG}
              className="flex items-center text-[4vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw] px-3 py-1 border border-stone-400 rounded"
            >
              <Image
                src="/images/code.png"
                alt="Example Image"
                layout="fixed"
                width={24}
                height={24}
              />
              <span className="ml-2">{t.work.sourcecode}</span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView={showContent ? "animate" : "initial"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:flex items-start justify-center mx-auto lg:gap-[1.38889vw] mb-20"
      >
        <div className="p-[4.44444vw]  py-10 lg:w-[14.0278vw] lg:p-0">
          <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
            {t.work.project}
          </p>
          <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
            Cryptofolio
          </h3>
        </div>
        <div className="p-[4.44444vw] lg:p-0  lg:w-[44.8611vw] ">
          <Image
            src="/images/CRYPTOFOLIOCRYPTOVIEW.jpg"
            alt="Example Image"
            layout="responsive"
            width={1938}
            height={1380}
          />
        </div>
        <div className="p-[4.44444vw] lg:w-[29.4444vw] lg:p-0">
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              {t.work.year}
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              2024
            </h3>
          </div>
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              {t.work.direction}
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              Crypto monitoring
            </h3>
          </div>
          <div>
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              {t.work.usedthings}
            </p>
            <div
              className="flex  [flex-flow:wrap] gap-[2vw]  sm:gap-[1.5vw] md:gap-[1.55556vw] lg:gap-[.555556vw]
            text-[3.46667vw] leading-[4vw]    sm:text-[2vw] sm:leading-[3vw] md:text-[1.8vw] md:leading-[3vw] lg:text-[.972222vw] lg:leading-[1.66667vw]"
            >
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                ReactJS
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Apex charts
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                gsap
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                scss
              </div>
            </div>
          </div>
          <div className="flex justify-center px-10 pt-10 gap-5 lg:gap-2 xl:gap-5">
            <a
              className="flex items-center text-[4vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw] px-3 py-1 border border-stone-400 rounded"
              href="https://mellifluous-rabanadas-2293b3.netlify.app"
              target="_blank"
            >
              <Image
                src="/images/eye.webp"
                alt="Example Image"
                layout="fixed"
                width={24}
                height={24}
              />
              <span className="ml-2">{t.work.viewwebsite}</span>
            </a>
            <a
              className="flex items-center text-[4vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw] px-3 py-1 border border-stone-400 rounded"
              href="https://github.com/nurullohkochenskiy/m8exam"
              target="_blank"
            >
              <Image
                src="/images/code.png"
                alt="Example Image"
                layout="fixed"
                width={24}
                height={24}
              />
              <span className="ml-2">{t.work.sourcecode}</span>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView={showContent ? "animate" : "initial"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:flex items-start justify-center mx-auto lg:gap-[1.38889vw] mb-20"
      >
        <div className="p-[4.44444vw]  py-10 lg:w-[14.0278vw] lg:p-0">
          <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
            {t.work.project}
          </p>
          <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
            Uzum clone
          </h3>
        </div>
        <div className="p-[4.44444vw] lg:p-0  lg:w-[44.8611vw] ">
          <Image
            src="/images/uzum.png"
            alt="Example Image"
            layout="responsive"
            width={1938}
            height={1380}
          />
        </div>
        <div className="p-[4.44444vw] lg:w-[29.4444vw] lg:p-0">
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              {t.work.year}
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              2024
            </h3>
          </div>
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              {t.work.direction}
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              Marketplace
            </h3>
          </div>
          <div>
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              {t.work.usedthings}
            </p>
            <div
              className="flex  [flex-flow:wrap] gap-[2vw]  sm:gap-[1.5vw] md:gap-[1.55556vw] lg:gap-[.555556vw]
            text-[3.46667vw] leading-[4vw]    sm:text-[2vw] sm:leading-[3vw] md:text-[1.8vw] md:leading-[3vw] lg:text-[.972222vw] lg:leading-[1.66667vw]"
            >
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                ReactJS
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                scss
              </div>
            </div>
          </div>
          <div className="flex justify-center px-10 pt-10 gap-5 lg:gap-2 xl:gap-5">
            <a
              className="flex items-center text-[4vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw] px-3 py-1 border border-stone-400 rounded"
              href="https://uzumclonebynurulloh.netlify.app/"
              target="_blank"
            >
              <Image
                src="/images/eye.webp"
                alt="Example Image"
                layout="fixed"
                width={24}
                height={24}
              />
              <span className="ml-2">{t.work.viewwebsite}</span>
            </a>
            <a
              className="flex items-center text-[4vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw] px-3 py-1 border border-stone-400 rounded"
              href="https://github.com/nurullohkochenskiy/uzumclone"
              target="_blank"
            >
              <Image
                src="/images/code.png"
                alt="Example Image"
                layout="fixed"
                width={24}
                height={24}
              />
              <span className="ml-2">{t.work.sourcecode}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
