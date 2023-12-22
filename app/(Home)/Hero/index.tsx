"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HomeBanner from "@/assets/images/home_banner.svg";
import Image from "next/image";
import "./style.scss";
import Typewriter from "typewriter-effect";
// icons import
import Behance from "@/assets/icons/behance.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Link from "next/link";
const Hero = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    });
  }, [controls]);
  const typewriiterData = ["UI/UX Designer", "A multi disciplinary designer"];
  return (
    <>
      <div className="home-wrapper" id="home">
        <div className="home-container">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={controls}
            exit={{ x: -300, opacity: 0 }}
            className="home-content"
          >
            {/* socials */}
            <motion.div className={"home-socials"}>
              <Image src={Behance} alt="torsha behance" />
              <Image src={Linkedin} alt="torsha linkedin" />
            </motion.div>
            {/* Home left */}
            <motion.div className="home-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hii, I am <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    staggerChildren: 0.1,
                  }}
                >
                  Torsha Chaudhuri
                </motion.span>
              </motion.h1>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                    staggerChildren: 0.1,
                  }}
                >
                  <Typewriter
                    options={{
                      strings: typewriiterData,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </motion.span>
              </motion.h3>
              <Link href={"/resume.pdf"}>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="home-resume-btn"
                >
                  Check out my resume
                </motion.button>
              </Link>
            </motion.div>

            {/* right side */}
            <motion.div
              animate={{ y: 50 }}
              transition={{
                duration: 2,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              initial={{ y: 0 }}
              className="home-right"
            >
              <Image
                width={500}
                height={500}
                src={HomeBanner}
                alt="Home Banner"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
