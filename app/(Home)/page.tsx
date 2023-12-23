import React from "react";
import Hero from "./Hero";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Head from "next/head";
import Introduction from "./Introduction";

const Home = () => {
  return (
    <>
      <Head>
        <title>Torsha Chaudhuri - Portfolio</title>
        <meta
          name="description"
          content="Torsha Chaudhuri's portfolio website showcasing her experience, skills, projects, and contact information."
        />
        <meta
          name="keywords"
          content="Torsha Chaudhuri, portfolio, web developer, full-stack developer"
        />
        <meta property="og:title" content="Torsha Chaudhuri - Portfolio" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://torsha-chaudhuri-portfolio.vercel.app/"
        />{" "}
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/D5603AQGpj-oCYBfjxw/profile-displayphoto-shrink_800_800/0/1687751136547?e=1708560000&v=beta&t=Y3kjMnn9UOvNrbwd6RFnaX6U3ZzKR6YHqAb-83NXLGw"
        />
      </Head>

      <div className="main-wrapper">
        <div className="main-container">
          <div className="main-content">
            <Hero />
            <Introduction/>
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
