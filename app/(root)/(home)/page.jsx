import Main from "@/components/home/Main";
import React from "react";
import Contact from "@/components/Contact/Contact";
import MiniCards from "@/components/home/MiniCards";
import ThirdSection from "@/components/home/ThirdSection";
import Marketing from "@/components/home/Marketing";
import Slider from "@/components/home/Slider";
import CatPre from "@/components/home/cat-preview";
import Hero from "@/components/home/Hero";

const page = () => {
  return (
    <>
      <Main />
      <Slider />
      <Hero />
      <Marketing />
      <CatPre />
      <Contact />
      <ThirdSection />
      <MiniCards />
    </>
  );
};

export default page;
