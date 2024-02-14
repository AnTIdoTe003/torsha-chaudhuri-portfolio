"use client";
import Container from "@/components/Container";
import React from "react";
import Project1 from "@/assets/images/project1.jpg";
import Project2 from "@/assets/images/project2.jpg";
import Project3 from "@/assets/images/project3.jpg";
import Project4 from "@/assets/images/project4.jpg";
import Project5 from "@/assets/images/project5.jpg";
import Project6 from "@/assets/images/project6.jpg";
import Project7 from "@/assets/images/project7.jpg";
import Project8 from "@/assets/images/project8.jpg";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/scss/navigation";
import "swiper/scss";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Projects = () => {
  const router = useRouter();
  const projectData = [
    {
      title: "",
      image: Project1,
      tag: "Digital Illustrations",
      link: "https://www.behance.net/gallery/49851771/VECTOR-ILLUSTRATIONS",
    },
    {
      title: "",
      image: Project2,
      tag: "Social Media creatives",
      link: "https://www.behance.net/gallery/134555829/Social-media-creatives",
    },
    {
      title: "",
      image: Project3,
      tag: "Typography",
      link: "https://www.behance.net/gallery/187385735/Typography",
    },
    {
      title: "",
      image: Project4,
      tag: "Animation",
      link: "https://www.behance.net/gallery/134853389/Showreel",
    },
    {
      title: "",
      image: Project5,
      tag: "Packaging design",
      link: "https://www.behance.net/gallery/123968771/Packaging-design",
    },
    {
      title: "",
      image: Project6,
      tag: "Logo design",
      link: "https://www.behance.net/gallery/188109187/LOGO-DESIGN",
    },
    {
      title: "",
      image: Project7,
      tag: "Print design",
      link: "https://www.behance.net/gallery/188109777/PRINT-DESIGN",
    },
    {
      title: "",
      image: Project8,
      tag: "UI/UX design",
      link: "https://www.behance.net/gallery/123159091/UIUX-DESIGN",
    },
    {
      title: "",
      image: "",
      tag: "PowerPoint Presentation",
      link: "https://www.behance.net/gallery/191014653/PowerPoint-Presentation-Design",
    },
  ];
  return (
    <div className="projects-wrapper" id="projects">
      <Container>
        <div className="projects-content">
          <div className="projects-header">
            <p>My work</p>
            <h1>Projects.</h1>
            <p>
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to art works and designs in it. It reflects my ability
              for creative problem solving, work with different technologies,
              and manage projects effectively.
            </p>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2 }}
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
                    <div className="project-card-tags">
                      <p>{ele.tag}</p>
                      <p onClick={() => router.push(`${ele.link}`)}>
                        View More
                      </p>
                    </div>
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
