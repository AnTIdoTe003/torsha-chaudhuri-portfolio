'use client'
import Container from "@/components/Container";
import React, { useEffect } from "react";
import "./style.scss"
import {motion, useAnimation } from "framer-motion";
const Introduction = () => {
   const controls = useAnimation();
   useEffect(() => {
     controls.start({
       y: 0,
       opacity: 1,
       transition: {
         type: "spring",
         stiffness: 260,
         damping: 20,
       },
     });
   }, [controls]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="introduction-wrapper"
    >
      <Container>
        <div className="introduction-content">
          <div className="introduction-header">
            <h1 aria-label="Introduction">Who am I?</h1>
          </div>
          <div className="introduction-details">
            <p>
              Graphic Designer with a strong background in creating visual brand
              identity with experience in presentation design, UI/UX, print
              design, video editing and motion graphics. Passionate about
              helping organizations deepen customer reach and shape identity
              through innovative designs.
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Introduction;
