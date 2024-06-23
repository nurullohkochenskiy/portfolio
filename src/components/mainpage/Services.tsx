"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Services.module.css";
import { useShowContentStore } from "@/store/showContentStore";
import { animate, motion } from "framer-motion";

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

const Services = () => {
  const showContent = useShowContentStore((state) => state.showContent);

  return (
    <section id="services" className="flex flex-col items-center">
      <motion.h2
        variants={fadeInAnimationVariants}
        initial="initial"
        animate={showContent ? "animate" : "initial"}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="py-4 text-[24px] text-yellow-500"
      >
        <span>What can I give you?</span>
      </motion.h2>
      <div className="w-full flex flex-col items-center mx-auto md:grid md:grid-cols-3  md:p-16 gap-4">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] p-[5%] border border-black rounded-2xl"
        >
          <div className="min-h-[48px]">
            <h3 className="text-[16px] font-semibold">Website Development</h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              Create custom websites from the ground up, tailored to your unique
              needs
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/website development.png"
              alt="Example Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] p-[5%] border border-black rounded-2xl"
        >
          <div className="min-h-[48px]">
            <h3 className="text-[16px] font-semibold">Website Enhancement</h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              Transform your existing website with modern enhancements.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/Website-redesign.png"
              alt="Example Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] p-[5%] border border-black rounded-2xl"
        >
          <div className="min-h-[48px]">
            <h3 className="text-[16px] font-semibold">UI/UX Design</h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              User-friendly interfaces that provide an engaging and intuitive
              experience for your visitors, ensuring they stay longer and return
              frequently.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/uxui.jpg"
              alt="Example Image"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] p-[5%] border border-black rounded-2xl"
        >
          <div className="min-h-[48px]">
            <h3 className="text-[16px] font-semibold">API Integration</h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              Integrate third-party APIs to enhance your website&apos;s
              functionality, providing features like social media integration,
              payment processing, and more.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/api.jpg"
              alt="Example Image"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] p-[5%] border border-black rounded-2xl"
        >
          <div className="min-h-[48px]">
            <h3 className="text-[16px] font-semibold">Responsive Design</h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              Specialize in creating responsive designs that provide a seamless
              experience on any device.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/responsive.png"
              alt="Example Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] p-[5%] border border-black rounded-2xl"
        >
          <div className="min-h-[48px]">
            <h3 className="text-[16px] font-semibold">
              Bug Fixes and Troubleshooting
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              Comprehensive bug fixing and troubleshooting services to ensure
              your website runs smoothly.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/bugfix.png"
              alt="Example Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] p-[5%] border border-black rounded-2xl"
        >
          <div className="min-h-[48px]">
            <h3 className="text-[16px] font-semibold">
              Performance Optimization
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              Improve your website&apos;s loading speed and performance. Fast
              websites enhance user experience, improve search engine rankings,
              and increase conversions.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/faster.webp"
              alt="Example Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] p-[5%] border border-black rounded-2xl"
        >
          <div className="min-h-[48px]">
            <h3 className="text-[16px] font-semibold">
              Maintenance and Support
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              Ongoing support and maintenance to ensure your website remains
              up-to-date, secure, and functioning optimally.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/support.png"
              alt="Example Image"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={showContent ? "animate" : "initial"}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[90%] p-[5%] border border-black rounded-2xl"
        >
          <div className="min-h-[48px]">
            <h3 className="text-[16px] font-semibold">
              Cross-Browser Compatibility
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              Your website works flawlessly across all major browsers, providing
              a consistent experience for all users.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/crossbrowser.jpg"
              alt="Example Image"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
