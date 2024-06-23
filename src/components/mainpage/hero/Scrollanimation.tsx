"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../../public/animation/scroll.json";

const Scrollanimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ height: "40px", width: "40px" }}
    />
  );
};

export default Scrollanimation;
