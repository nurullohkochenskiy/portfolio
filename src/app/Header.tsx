"use client";
import React from "react";
import { useShowContentStore } from "@/store/showContentStore";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import useLangStore from "@/store/langStore";

const Header: React.FC = () => {
  const showContent = useShowContentStore((state) => state.showContent);
  const { language, setLanguage } = useLangStore();
  const translations = {
    en: {
      services: "Services,",
      works: "Works,",
      about: "About",
      contact: "Contact me",
    },
    uz: {
      services: "Xizmatlar,",
      works: "Ishlar,",
      about: "Men xaqimda",
      contact: "Aloqaga chiqish",
    },
  };
  const t = translations[language];
  return (
    <div className="relative">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -50 }}
        transition={{ duration: 0.7 }}
        className="flex justify-between items-center px-6 py-3"
        style={{ visibility: showContent ? "visible" : "hidden" }}
      >
        <div className="text-[40px] font-bold text-indigo-500">Portfolio</div>
        <div className="flex justify-between sm:gap-7 lg:gap-0 lg:max-w-[70%] xl:max-w-[50%] lg:w-full text-[20px] font-bold">
          <div className="hidden lg:flex gap-2 pl-[70px]">
            <Link
              to="services"
              smooth={true}
              duration={300}
              className="underline-hover cursor-pointer"
            >
             {t.services}
            </Link>
            <Link
              to="works"
              smooth={true}
              duration={500}
              className="underline-hover cursor-pointer"
            >
              {t.works}
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={700}
              className="underline-hover cursor-pointer"
            >
              {t.about}
            </Link>
          </div>
          <div>
            <button
              onClick={() => setLanguage("en")}
              className={
                language == "en" ? "underline_active" : "underline-hover"
              }
            >
              EN
            </button>
            |
            <button
              onClick={() => setLanguage("uz")}
              className={
                language == "uz" ? "underline_active" : "underline-hover"
              }
            >
              UZ
            </button>
          </div>

          <Link
            to="contacts"
            smooth={true}
            duration={900}
            className="underline-hover hidden lg:block cursor-pointer"
          >
            {t.contact}
          </Link>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;
