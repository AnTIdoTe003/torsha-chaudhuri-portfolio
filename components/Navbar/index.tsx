"use client";
import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  const navOptions = [
    {
      id: 1,
      title: "Home",
      slug: "home",
    },
    {
      id: 1,
      title: "Work",
      slug: "work",
    },
    {
      id: 1,
      title: "Projects",
      slug: "projects",
    },
    {
      id: 1,
      title: "Contact",
      slug: "contact",
    },
  ];
  type NavOptionTypes = {
    id: number;
    title: string;
    slug: string;
  };
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-content">
          {navOptions.map((ele: NavOptionTypes, index: number) => {
            return (
              <motion.button
                key={ele.id}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.33,
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                {ele.title}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
