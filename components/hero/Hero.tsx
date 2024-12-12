import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from "react";
import Section from "../main/Section";
import { useTrail, a } from "@react-spring/web";
import Image from "next/image";
import { renderCanvas } from './renderCanvas';

interface heroProps {
  heroRef?: React.MutableRefObject<null>;
}

const Hero: React.FC<heroProps> = ({ heroRef }) => {

  const { t } = useTranslation();

  const [isTabletOrLarger, setIsTabletOrLarger] = useState(false);

  const [springs, api] = useTrail(4, () => ({
    from: {
      y: 50,
      opacity: 0,
    },
    config: {
      tension: 235,
      friction: 28,
    },
  }));

  useEffect(() => {
    const updateScreenSize = () => {
      setIsTabletOrLarger(window.innerWidth >= 768);
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      api.start({
        y: 0,
        opacity: 1,
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isTabletOrLarger) {
      renderCanvas();
    }
  }, [isTabletOrLarger]);

  return (
    <Section label="hero" id="content" sectionRef={heroRef}>
      <div className="section-wrapper">
        <a.div style={springs[0]} className="hero__image">
          <Image
            src="/Ale_Tanus.png"
            width={500}
            height={500}
            alt="Headshot"
            priority={true}
          />
        </a.div>
        <a.h1 style={springs[1]}>{t("Hi, my name is")}</a.h1>
        <a.h2 style={springs[1]}>Alessandro Tanus.</a.h2>
        <a.p style={springs[2]}>
          <b>{t("I am a ")}</b>
          <b className='b-blue'>{t("Developer ")}</b>
          <b>{t("and ")}</b>
          <b className='b-blue'>{t("Designer")}</b>
          <b>{t(".")}</b>
          <br/>
          <br/>
          <b> • </b>
          {t("As a Developer (Front-end | Back-end), I develop web and mobile applications with a focus on efficiency, scalability, and technical robustness.")}
          <br/>
          <br/>
          <b> • </b>
          {t("As a Designer (Products | UI | UX | Branding), I plan, create, and deliver digital projects that effectively align with business objectives, balancing aesthetics, functionality, and a high-quality user experience.")}
          <br/>
          <br/>
          <b className='b-blue-black'>{t("Do you need a professional to develop a system, app, or interface? ")}</b>
          <b className='b-blue-black'>{t("I am available to assist you.")}</b>
        </a.p>
        <a.a href="#featured" style={springs[3]}>
          <button tabIndex={-1}>{t("Check out my work")}</button>
        </a.a>
      </div>
      {isTabletOrLarger && <canvas className="canvas" id="canvas"></canvas>}
    </Section>
  );
};

export default Hero;
