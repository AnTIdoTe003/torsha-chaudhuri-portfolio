"use client";
import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { experience } from "@/constants/experience";
import Image from "next/image";
import { AiFillBehanceCircle } from "react-icons/ai";
import { Chrono } from "react-chrono";
import Head from "next/head";
import Company1 from "@/assets/icons/affinityexpress-logo.png"
import Company2 from "@/assets/icons/mohan impex.jpg"
import Company3 from "@/assets/icons/shakambhari.png"
const Experience = () => {
  const timelineItems = experience.map((item, index) => ({
    title: (
      <div
        className="work-duration"
        style={{
          display: "flex",
          flexDirection: "column",
          fontWeight: "700",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <p style={{transform:'translate-X(20px)'}}>{item?.date?.joiningDate}</p>
        <p>{item?.date?.leavingDate}</p>
      </div>
    ),
    cardTitle: (
      <div
        className="company-name"
        style={{
          color: "#F4E9CD",
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "Poppins",
        }}
      >
        <p>{item?.companyName}</p>
      </div>
    ),
    cardDetailedText: item.points.map((ele, index) => {
      return (
      <ul key={index}>
        <li key={index}>{ele}</li>
      </ul>
      )
    }),
    cardSubtitle: <p>{item?.title}</p>,
    icon: (
      <div className="company-icon">
        <AiFillBehanceCircle />
      </div>
    ),
  }));
  return (
    <>
      <Head>
        <title>Torsha Chaudhuri - Work Experience</title>
        <meta
          name="description"
          content="Explore Torsha Chaudhuri's work experience and achievements."
        />
      </Head>
      <div className="experience-wrapper" id="experience">
        <div className="experience-container">
          <div className="experience-content">
            <motion.div
              className="experience-header"
              variants={{
                initial: {
                  y: -50,
                  opacity: 0,
                },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    duration: 1.25,
                    delay: 0,
                  },
                },
              }}
            >
              <h3>What I have done so far?</h3>
              <h1>Work Experience</h1>
            </motion.div>
            <div className="experience-timeline">
              <Chrono
                items={timelineItems}
                theme={{
                  primary: "#F4E9CD",
                  secondary: "#031926",
                  cardBgColor: "#468189",
                  cardForeColor: "violet",
                  titleColor: "#F4E9CD",
                  titleColorActive: "#F4E9CD",
                }}
                mode="VERTICAL_ALTERNATING"
                itemWidth={150}
              >
                <div className="chrono-icons">
                  <Image
                    src={Company1}
                    width={40}
                    height={40}
                    alt="Affinity X"
                  />
                  <Image
                    src={Company2}
                    alt="Mohan Impex Pvt. Ltd"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={Company3}
                    alt="Shakambhari Ispat & Power Ltd"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={Company3}
                    alt="Shakambhari Ispat & Power Ltd"
                    width={40}
                    height={40}
                  />
                </div>
              </Chrono>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
