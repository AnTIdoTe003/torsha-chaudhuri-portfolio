import Container from "@/components/Container";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaSquareBehance, FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./style.scss";
import Link from "next/link";
import { title } from "process";
const Contact = () => {
  const contactDetails = [
    {
      title: "Email",
      icon: <MdEmail />,
      slug: "mailto:torshachaudhuri2011@gmail.com",
    },
    {
      title: "Phone",
      icon: <FaPhone />,
      slug: "tel:+916289670225",
    },
    {
      title: "Youtube",
      icon: <FaYoutube />,
      slug: " https://www.youtube.com/channel/UCgvJjvK70z_I0bmOHdhNKAA",
    },
    {
      title: "Linkedin",
      icon: <FaLinkedin />,
      slug: "https://www.linkedin.com/in/torsha-chaudhuri-75196b12b/",
    },
    {
      title: "Behance",
      icon: <FaSquareBehance />,
      slug: "https://www.behance.net/torshachau6eeceed",
    },
  ];
  return (
    <div className="contact-wrapper" id="contact">
      <Container>
        <div className="contact-content">
          <div className="contact-header">
            <h1>Drop a Hi</h1>
            <p>
              My inbox is always open. If you have a question or want to say
              hello, I&apos;ll do my best to respond!
            </p>
          </div>
          <div className="contact-details">
            {contactDetails.map((ele, index) => {
              return (
                <a href={`${ele.slug}`} key={index} aria-label={ele.title}>
                  <span>{ele.icon}</span>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
