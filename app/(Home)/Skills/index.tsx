import Container from '@/components/Container'
import React from 'react'
import Figma from '@/assets/icons/figma.svg'
import AdobeXd from '@/assets/icons/adobexd.svg'
import AdobeIllustrator from '@/assets/icons/illustrator.svg'
import AdobeIndesign from '@/assets/icons/indesign.svg'
import AdobePhotoshop from '@/assets/icons/photoshop.svg'
import MicrosoftPowerPoint from '@/assets/icons/powerpoint.svg'
import AdobeAfterEffects from '@/assets/icons/aftereffects.svg'
import Maya from '@/assets/icons/maya.png'
import Image from 'next/image'
import "./style.scss"
const Skills = () => {
  return (
    <div className="skills-wrapper" id='skills'>
      <Container>
        <div className="skills-content">
          <Image src={Figma} alt='skills figma' />
          <Image src={AdobeXd} alt='skills adobexd' />
          <Image src={AdobeIllustrator} alt='skills adobe illustrator' />
          <Image src={AdobeIndesign} alt='skills adobe indesign' />
          <Image src={AdobePhotoshop} alt='skills adobe photoshop' />
          <Image src={MicrosoftPowerPoint} alt=' skills microsoft power point' />
          <Image src={AdobeAfterEffects} alt=' skills adobe after effects' />
          <Image width={144} height={144} src = {Maya} alt='skills autodesk maya'/>
        </div>
      </Container>
    </div>
  )
}

export default Skills
