import React from "react";
import Hero from "./components/hero";
import Section1 from "./components/section_01";
import Section2 from "./components/section_02";
import Section3 from "./components/section_03";
import Section4 from "./components/section_04";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
 
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  );
}
