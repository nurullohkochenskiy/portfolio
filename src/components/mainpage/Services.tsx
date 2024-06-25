"use client";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Services.module.css";
import { useShowContentStore } from "@/store/showContentStore";
import { animate, motion } from "framer-motion";
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

const Services = () => {
  const showContent = useShowContentStore((state) => state.showContent);
  //!Lang
  const { language } = useLangStore();
  const translations = {
    en: {
      title: "What can I give you?",
      services: {
        development: {
          title: "Website Development",
          description:
            "I can create custom websites from the ground up, tailored to your unique needs",
        },
        enhancement: {
          title: "Website Enhancement",
          description:
            "I can transform your existing website with modern enhancements.",
        },
        design: {
          title: "UI/UX Design",
          description:
            "I can create visually appealing and user-friendly designs for your website",
        },
        api: {
          title: "API Integration",
          description:
            "I can integrate third-party APIs to enhance your website's functionality, providing features like social media integration, payment processing, and more.",
        },
        responsive: {
          title: "Responsive Design",
          description:
            "I can ensure your website is optimized for all devices and screen sizes.",
        },
        bugfix: {
          title: "Bug Fixes and Troubleshooting",
          description:
            "I can identify and fix bugs, ensuring your website runs smoothly.",
        },
        optimization: {
          title: "Performance Optimization",
          description:
            "I can optimize your website's performance, ensuring fast loading times and improved user experience",
        },
        maintenance: {
          title: "Maintenance and Support",
          description:
            "I can provide ongoing support and maintenance to ensure your website remains up-to-date, secure, and functioning optimally.",
        },
        crossbrowser: {
          title: "Cross-Browser Compatibility",
          description:
            "I can ensure your website works flawlessly with all major browsers and versions.",
        },
      },
    },
    uz: {
      title: "Sizga nima bera olaman?",
      services: {
        development: {
          title: "Veb-sayt yaratish",
          description:
            "Talablaringizga javob beradigan veb-saytni 0 dan yasay olaman",
        },
        enhancement: {
          title: "Veb-sayt kuchaytirish",
          description:
            "O'zingizda mavjud veb-saytni zamonaviy yaxshilanishlar bilan o'zgartira olaman.",
        },
        design: {
          title: "UI/UX Dizayn",
          description:
            "Veb-saytingiz uchun chiroyli ko'rinishdagi foydalanuvchiga yoqadigan dizaynni yasay olaman",
        },
        api: {
          title: "API Integratsiya",
          description:
            "Men veb-saytingiz funksiyalarini yaxshilash, ijtimoiy media integratsiyasi, to‘lovlarni qayta ishlash va boshqalar kabi xususiyatlarni taqdim etish uchun uchinchi tomon API-larini birlashtira olaman.",
        },
        responsive: {
          title: "Responsiv dizayn",
          description:
            "Veb-saytingiz barcha qurilma va ekran o'lchamlariga mos kelishini taminlay olaman.",
        },
        bugfix: {
          title: "Xatolarni topish and bartaraf qilish",
          description:
            "Veb-saytingiz ravon ishlashi uchun xatoliklarni topib, ularni tuzata olaman",
        },
        optimization: {
          title: "Ishlashni optimallashtirish",
          description:
            "Tezkor yuklash va yuqori foydalanuvchi tasurotiga erishish uchun, veb-sayt ishlash sifatini optimallashtira olaman",
        },
        maintenance: {
          title: "Qollab-quvvatlash va yordam",
          description:
            "Veb-sayt har doim yangilanib turishi, xavfsiz bo'lishi va optimal ishlashi uchun yordam bera olaman.",
        },
        crossbrowser: {
          title: "Brauzerlar o'rtasidagi muvofiqlik",
          description:
            "Sizning veb-saytingiz barcha asosiy brauzerlar va versiyalar bilan mukammal ishlashini ta'minlay olaman",
        },
      },
    },
  };
  const t = translations[language];

  //!Lang end
  return (
    <section id="services" className="flex flex-col items-center">
      <motion.h2
        variants={fadeInAnimationVariants}
        initial="initial"
        animate={showContent ? "animate" : "initial"}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="py-4 text-[24px] text-yellow-500"
      >
        <span>{t.title}</span>
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
            <h3 className="text-[16px] font-semibold">
              {t.services.development.title}
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              {t.services.development.description}
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
            <h3 className="text-[16px] font-semibold">
              {t.services.enhancement.title}
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              {t.services.enhancement.description}
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
            <h3 className="text-[16px] font-semibold">
              {t.services.design.title}
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              {t.services.design.description}
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
            <h3 className="text-[16px] font-semibold">
              {t.services.api.title}
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              {t.services.api.description}
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
            <h3 className="text-[16px] font-semibold">
              {t.services.responsive.title}
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              {t.services.responsive.description}
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
              {t.services.bugfix.title}
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              {t.services.bugfix.description}
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
              {t.services.optimization.title}
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              {t.services.optimization.description}
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
              {t.services.maintenance.title}
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              {t.services.maintenance.description}
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
              {t.services.crossbrowser.title}
            </h3>
          </div>
          <div className="pt-[2%] pb-[5%] min-h-[185px] max-h-[185px]">
            <p className="pt-[2%] pb-[5%] text-stone-500">
              {t.services.crossbrowser.description}
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
