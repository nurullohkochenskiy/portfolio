"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useShowContentStore } from "@/store/showContentStore";
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

  return (
    <section id="works">
      <motion.h2
        variants={fadeInAnimationVariants}
        initial="initial"
        animate={showContent ? "animate" : "initial"}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-yellow-500 p-10 text-center text-[20px]"
      >
        Works
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
            Project
          </p>
          <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
            Cryptofolio
          </h3>
        </div>
        <div className="p-[4.44444vw] lg:p-0  lg:w-[44.8611vw] ">
          <Image
            src="/images/examplepreview.png"
            alt="Example Image"
            layout="responsive"
            width={1938}
            height={1380}
          />
        </div>
        <div className="p-[4.44444vw] lg:w-[29.4444vw] lg:p-0">
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Year
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              2024
            </h3>
          </div>
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Direction
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              Cryptos monitoring
            </h3>
          </div>
          <div>
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Role
            </p>
            <div
              className="flex  [flex-flow:wrap] gap-[2vw]  sm:gap-[1.5vw] md:gap-[1.55556vw] lg:gap-[.555556vw]
            text-[3.46667vw] leading-[4vw]    sm:text-[2vw] sm:leading-[3vw] md:text-[1.8vw] md:leading-[3vw] lg:text-[.972222vw] lg:leading-[1.66667vw]"
            >
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ui Design
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
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
            Project
          </p>
          <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
            Cryptofolio
          </h3>
        </div>
        <div className="p-[4.44444vw] lg:p-0  lg:w-[44.8611vw] ">
          <Image
            src="/images/examplepreview.png"
            alt="Example Image"
            layout="responsive"
            width={1938}
            height={1380}
          />
        </div>
        <div className="p-[4.44444vw] lg:w-[29.4444vw] lg:p-0">
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Year
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              2024
            </h3>
          </div>
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Direction
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              Cryptos monitoring
            </h3>
          </div>
          <div>
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Role
            </p>
            <div
              className="flex  [flex-flow:wrap] gap-[2vw]  sm:gap-[1.5vw] md:gap-[1.55556vw] lg:gap-[.555556vw]
            text-[3.46667vw] leading-[4vw]    sm:text-[2vw] sm:leading-[3vw] md:text-[1.8vw] md:leading-[3vw] lg:text-[.972222vw] lg:leading-[1.66667vw]"
            >
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ui Design
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
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
            Project
          </p>
          <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
            Cryptofolio
          </h3>
        </div>
        <div className="p-[4.44444vw] lg:p-0  lg:w-[44.8611vw] ">
          <Image
            src="/images/examplepreview.png"
            alt="Example Image"
            layout="responsive"
            width={1938}
            height={1380}
          />
        </div>
        <div className="p-[4.44444vw] lg:w-[29.4444vw] lg:p-0">
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Year
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              2024
            </h3>
          </div>
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Direction
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              Cryptos monitoring
            </h3>
          </div>
          <div>
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Role
            </p>
            <div
              className="flex  [flex-flow:wrap] gap-[2vw]  sm:gap-[1.5vw] md:gap-[1.55556vw] lg:gap-[.555556vw]
            text-[3.46667vw] leading-[4vw]    sm:text-[2vw] sm:leading-[3vw] md:text-[1.8vw] md:leading-[3vw] lg:text-[.972222vw] lg:leading-[1.66667vw]"
            >
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ui Design
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
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
            Project
          </p>
          <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
            Cryptofolio
          </h3>
        </div>
        <div className="p-[4.44444vw] lg:p-0  lg:w-[44.8611vw] ">
          <Image
            src="/images/examplepreview.png"
            alt="Example Image"
            layout="responsive"
            width={1938}
            height={1380}
          />
        </div>
        <div className="p-[4.44444vw] lg:w-[29.4444vw] lg:p-0">
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Year
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              2024
            </h3>
          </div>
          <div className="mb-[2vw]">
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Direction
            </p>
            <h3 className="text-[5vw] leading-[7vw] md:text-[4vw] md:leading-[5vw] lg:text-[1.38889vw] lg:leading-[1.94444vw]">
              Cryptos monitoring
            </h3>
          </div>
          <div>
            <p className="text-[3.2vw] leading-[3vw] sm:text-[2vw] sm:leading-[2.5vw] py-1 md:text-[1.5vw] md:leading-[2vw] lg:text-[.833333vw] lg:leading-[1.25vw]">
              Role
            </p>
            <div
              className="flex  [flex-flow:wrap] gap-[2vw]  sm:gap-[1.5vw] md:gap-[1.55556vw] lg:gap-[.555556vw]
            text-[3.46667vw] leading-[4vw]    sm:text-[2vw] sm:leading-[3vw] md:text-[1.8vw] md:leading-[3vw] lg:text-[.972222vw] lg:leading-[1.66667vw]"
            >
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ui Design
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
              <div className="bg-slate-500 rounded-[3vw]  py-[3vw] px-[4.5vw] sm:rounded-[1.2vw] sm:py-[2vw] sm:px-[4vw]   md:rounded-[1vw] md:py-[1vw] md:px-[3vw] lg:rounded-[.694444vw] lg:py-[.555556vw] lg:px-[1vw] ">
                Ux Research
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
