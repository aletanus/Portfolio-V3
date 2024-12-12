import { useTranslation } from 'react-i18next';
import React from "react";
import Section from "../main/Section";
import { a, useTrail } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface AboutProps {
  aboutRef?: React.MutableRefObject<null>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {

  const { t } = useTranslation();

  const [springs, api] = useTrail(2, () => ({
    from: {
      y: 50,
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 28,
    },
  }));

  useIntersectionObserver(aboutRef, () => {
    api.start({
      y: 0,
      opacity: 1
    })
  })

  return (
    <Section label="about" sectionRef={aboutRef}>
      <a.header style={springs[0]}>
        <h2 className='b-blue'>{t("About Me")}</h2>
      </a.header>
      <a.div className="about__container" style={springs[1]}>
        <article className="about__content">
          
          <p>
            <b> {t("My name is")} Alesandro Tanus</b><b>{t(", I'm a Full Stack Developer, Computer Science Student and Bachelor in Product Design.")}</b>
          </p>

          <br />

          <p>
            <b className='b-blue'>{t("As a Developer:")}</b>
            {t(" My goal is to develop robust, efficient, and scalable systems and applications for both web and mobile platforms. I place technical efficiency at the core of my work, ensuring the final product meets business demands with quality and reliability.")}
            <br/>

            <b className='b-blue'>{t(" • Mobile:")}</b>
            {t(" Development of optimized applications for Android and iOS, with a focus on performance and compatibility.")}

            <br/>
            <b className='b-blue'>{t(" • Front-end:")}</b>
            {t(" Creation of responsive and functional interfaces tailored to user needs.")}

            <br/>
            <b className='b-blue'>{t(" • Back-end:")}</b>
            {t(" Building solid APIs and infrastructure to ensure performance and security.")}
          </p>

          <br />
    

          <p>
            <b className='b-blue'>{t("As a Designer:")}</b>            
            {t(" My mission is to craft engaging digital experiences aligned with both user and business needs. I transform concepts into captivating experiences by putting the user and the message at the center of every decision.")}
            <br/>

            <b className='b-blue'>{t(" • UI/UX:")}</b>
            {t(" Designing intuitive interfaces that prioritize usability and aesthetics.")}

            <br/>
            <b className='b-blue'>{t(" • Products:")}</b>
            {t(" Strategizing and developing digital solutions that connect technology with purpose.")}

            <br/>
            <b className='b-blue'>{t(" • Branding:")}</b>
            {t(" Enhancing visual identity to create memorable and coherent brands.")}
          </p>

          <br />

          <p>
            <b className='b-blue-black'>{t("Are you looking to expand your development team or need a professional to build a system, app, or interface?")}</b>{" "}
            <a href="#contact">
              {t("I am available to assist you.")}
            </a>
          </p>

        </article>
      </a.div>
    </Section>
  );
};

export default About;
