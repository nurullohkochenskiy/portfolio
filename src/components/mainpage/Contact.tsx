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
const Contact = () => {
  const showContent = useShowContentStore((state) => state.showContent);
  //!Lang
  const { language } = useLangStore();
  const translations = {
    en: {
      title: "Get in touch",
      ephone: "Email&Phone",
      social: "Social",
    },
    uz: {
      title: "Men bilan bog'laning",
      ephone: "Email&Telefon",
      social: "Ijtimoiy",
    },
  };
  const t = translations[language];

  //!Lang end
  return (
    <section id="contacts">
      <hr />
      <motion.h2
        variants={fadeInAnimationVariants}
        initial="initial"
        animate={showContent ? "animate" : "initial"}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-yellow-500 p-10 text-center text-[30px] "
      >
        {t.title}
      </motion.h2>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView={showContent ? "animate" : "initial"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="font-bold text-[20px] ">{t.ephone}</div>
        <h4 className="flex items-center gap-2 text-stone-500">
          <div className="w-[30px] h-[30px]">
            <Image
              src="/images/emailicon.png"
              alt="Example Image"
              layout="responsive"
              width={30}
              height={30}
              className=""
            />
          </div>
          <span>
            <a href="mailto:amirmamatovn1551@gmail.com">
              amirmamatovn1551@gmail.com
            </a>
          </span>
        </h4>
        <h4 className="flex items-center gap-2 text-stone-500">
          <div className="w-[30px] h-[30px]">
            <Image
              src="/images/phoneicon.png"
              alt="Example Image"
              layout="responsive"
              width={30}
              height={30}
              className=""
            />
          </div>
          <span>
            <a href="tel:+998971110814">+998(97)111-08-14</a>
          </span>
        </h4>
      </motion.div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView={showContent ? "animate" : "initial"}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center mt-4 pb-10 gap-1"
      >
        <div className="font-bold text-[20px]">{t.social}</div>
        <h4 className="flex items-center gap-2 text-stone-500">
          <div className="w-[30px] h-[30px]">
            <Image
              src="/images/linkedinicon.png"
              alt="Example Image"
              layout="responsive"
              width={30}
              height={30}
              className=""
            />
          </div>
          <span>
            <a
              href="https://www.linkedin.com/in/nurulloh-amirmamatov-a019202b1/"
              target="_blank"
            >
              Nurulloh
            </a>
          </span>
        </h4>

        <h4 className="flex items-center gap-2 text-stone-500">
          <div className="w-[30px] h-[30px]">
            <Image
              src="/images/telegramicon.png"
              alt="Example Image"
              layout="responsive"
              width={30}
              height={30}
              className=""
            />
          </div>
          <span>
            <a href="https://t.me/american_coder" target="_blank">
              @american_coder
            </a>
          </span>
        </h4>
        <h4 className="flex items-center gap-2 text-stone-500">
          <div className="w-[30px] h-[30px]">
            <Image
              src="/images/github.png"
              alt="Example Image"
              layout="responsive"
              width={30}
              height={30}
              className=""
            />
          </div>
          <span>
            <a href="https://github.com/nurullohkochenskiy" target="_blank">
              nurullohkochenskiy
            </a>
          </span>
        </h4>
      </motion.div>
    </section>
  );
};

export default Contact;
