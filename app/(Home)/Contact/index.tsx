import Container from "@/components/Container";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./style.scss"
const Contact = () => {
  const contactDetails = [
    {
      title: " torsha@torsha.com",
      icon: <MdEmail />,
      slug: "/",
    },
    {
      title: " torsha@torsha.com",
      icon: <FaPhone />,
      slug: "/",
    },
    {
      title: " torsha@torsha.com",
      icon: <FaFacebook />,
      slug: "/",
    },
    {
      title: " torsha@torsha.com",
      icon: <FaInstagram />,
      slug: "/",
    },
  ];
  return (
    <div className="contact-wrapper">
      <Container>
        <div className="contact-content">
          <div className="contact-header">
            <h1>Drop a Hi</h1>
          </div>
          <div className="contact-details">
            {contactDetails.map((ele, index) => {
              return (
                <div key={index}>
                  <span>{ele.icon}</span>
                  <span>{ele.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
