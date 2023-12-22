import Container from "@/components/Container";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaInstagram, FaSquareBehance } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import "./style.scss";
const Contact = () => {
  const contactDetails = [
    {
      icon: <MdEmail />,
      slug: "/",
    },
    {
      icon: <FaPhone />,
      slug: "/",
    },
    {
      icon: <FaFacebook />,
      slug: "/",
    },
    {
      icon: <FaInstagram />,
      slug: "/",
    },
    {
      icon: <FaLinkedin />,
      slug: "/",
    },
    {
      icon: <FaSquareBehance />,
      slug: "/",
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
              return <span key={index}>{ele.icon}</span>;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
