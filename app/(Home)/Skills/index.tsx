import Container from "@/components/Container";
import React from "react";
import Figma from "@/assets/icons/figma.svg";
import AdobeXd from "@/assets/icons/adobexd.svg";
import AdobeIllustrator from "@/assets/icons/illustrator.svg";
import AdobeIndesign from "@/assets/icons/indesign.svg";
import AdobePhotoshop from "@/assets/icons/photoshop.svg";
import MicrosoftPowerPoint from "@/assets/icons/powerpoint.svg";
import AdobeAfterEffects from "@/assets/icons/aftereffects.svg";
import Maya from "@/assets/icons/maya.png";
import VsCode from "@/assets/icons/vscode.svg"
import MsPublisher from "@/assets/icons/mspublisher.svg"
import Image from "next/image";
import "./style.scss";
import Head from "next/head";
const Skills = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Explore Torsha Chaudhuri's design skills, including Figma, Adobe XD, Illustrator, InDesign, Photoshop, PowerPoint, After Effects, and Maya."
        />
        <meta
          property="og:description"
          content="Explore Torsha Chaudhuri's design skills, including Figma, Adobe XD, Illustrator, InDesign, Photoshop, PowerPoint, After Effects, and Maya."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Torsha Chaudhuri - Skills" />
      </Head>

      <div className="skills-wrapper" id="skills">
        <Container>
          <div className="skills-content">
            <Image src={AdobePhotoshop} alt="skills adobe photoshop" />
            <Image src={AdobeIllustrator} alt="skills adobe illustrator" />
            <Image src={AdobeIndesign} alt="skills adobe indesign" />
            <Image
              src={MicrosoftPowerPoint}
              alt=" skills microsoft power point"
            />
            <Image src={AdobeAfterEffects} alt=" skills adobe after effects" />
            <Image src ={MsPublisher} alt="skills ms publisher" />
            <Image src={Figma} alt="skills figma" />
            <Image
              width={144}
              height={144}
              src={Maya}
              alt="skills autodesk maya"
            />
            <Image src={AdobeXd} alt="skills adobexd" />
            <Image src={VsCode} alt="skills vscode" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skills;
