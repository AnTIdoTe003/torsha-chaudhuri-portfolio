'use client'
import Container from "@/components/Container";
import React from "react";
import Project1 from "@/assets/images/project1.jpg";
import Project2 from "@/assets/images/project2.jpg";
import Project3 from "@/assets/images/project3.jpg";
import Project4 from "@/assets/images/project4.jpg";
import Project5 from "@/assets/images/project5.jpg";
import Project6 from "@/assets/images/project6.jpg";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/scss/navigation";
import "swiper/scss";
import Image from "next/image";
const Projects = () => {
  const projectData = [
    {
      title: "",
      image: Project1,
    },
    {
      title: "",
      image: Project2,
    },
    {
      title: "",
      image: Project3,
    },
    {
      title: "",
      image: Project4,
    },
    {
      title: "",
      image: Project5,
    },
    {
      title: "",
      image: Project6,
    },
  ];
  return (
    <div className="projects-wrapper">
      <Container>
        <div className="projects-content">
          <div className="projects-header">
            <p>My work</p>
            <h1>Projects.</h1>
            <p>
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            loop
            className="project-slider"
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projectData.map((ele, index) => {
              return (
                <SwiperSlide key={index}>
                  <div key={index} className="project-card">
                    <Image
                      className="project-card-img"
                      src={ele.image}
                      alt={"Torsha Chaudhuri Projects"}
                    />
                    <p>{ele.title}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
