import React from "react";

import "../styles/Main.css";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";

const Main = () => {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Contact />
    </main>
  );
};

export default Main;
