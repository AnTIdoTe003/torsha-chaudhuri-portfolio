"use client";
import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { experience } from "@/constants/experience";
import Image from "next/image";
import { AiFillBehanceCircle } from "react-icons/ai";
import { Chrono } from "react-chrono";
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
        }}
      >
        <p>{item?.date?.joiningDate}</p>
        <p>{item?.date?.leavingDate}</p>
      </div>
    ),
    cardTitle: (
      <div
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
      return <li key={index}>{ele}</li>;
    }),
    cardSubtitle: <p>{item?.title}</p>,
    icon: <AiFillBehanceCircle />,
  }));
  return (
    <div className="experience-wrapper">
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
                  src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
                  alt="twitter"
                  width={50}
                  height={50}
                />
                <Image
                  src="https://img.icons8.com/ios-filled/100/000000/about.png"
                  alt="twitter"
                  width={20}
                  height={20}
                />
                <Image
                  src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
                  alt="twitter"
                  width={20}
                  height={20}
                />
                <Image
                  src="https://img.icons8.com/ios-filled/100/000000/briefcase.png"
                  alt="twitter"
                  width={20}
                  height={20}
                />
                <Image
                  src="https://img.icons8.com/ios-filled/100/000000/idea.png"
                  alt="twitter"
                  width={20}
                  height={20}
                />
                <Image
                  src="https://img.icons8.com/ios-filled/100/000000/sun.png"
                  alt="twitter"
                  width={20}
                  height={20}
                />
                <Image
                  src="https://img.icons8.com/ios-filled/100/000000/info.png"
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </div>
            </Chrono>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
