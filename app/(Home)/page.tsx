import React from "react";
import Hero from "./Hero";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="main-container">
        <div className="main-content">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default Home;
