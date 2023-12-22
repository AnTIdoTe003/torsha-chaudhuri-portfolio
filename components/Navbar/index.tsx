"use client";
import React from "react";
import "./style.scss";
import { motion } from "framer-motion";
import Link from "next/link";
const Navbar = () => {
  const navOptions = [
    {
      id: 1,
      title: "Home",
      slug: "#home",
    },
    {
      id: 1,
      title: "Work",
      slug: "#experience",
    },
    {
      id: 1,
      title: "Projects",
      slug: "#projects",
    },
    {
      id: 1,
      title: "Contact",
      slug: "#contact",
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
              <Link key={index} href={`${ele?.slug}`}>
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
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
