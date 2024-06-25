"use client";
import Hero from "../components/mainpage/Hero";
import Works from "../components/mainpage/Works";
import Services from "../components/mainpage/Services";
import About from "../components/mainpage/About";
import Contact from "../components/mainpage/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Hero />
      <Services />
      <Works />
      <About />
      <Contact />
    </main>
  );
}
