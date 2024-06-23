"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../../public/animation/Animation.json"; // Adjust the path to your JSON file

const LottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ height: "600px", width: "600x" }}
    />
  );
};

export default LottieAnimation;
