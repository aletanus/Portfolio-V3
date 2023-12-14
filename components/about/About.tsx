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
        <h2>{t("About Me")}</h2>
      </a.header>
      <a.div className="about__container" style={springs[1]}>
        <article className="about__content">
          <p>
            {t("Hello! My name is")} <b>Alesandro Tanus</b>{t(", I'm a Full Stack Developer, Computer Science Student and Bachelor in Product Design. I thoroughly enjoy working as a ")}<b>{t("Full Stack Developer")}</b>{t(", yet I find myself equally at ease working on just one of the stacks, either as a Front-End Developer or as a Back-End Developer.")}
          </p>

          <p>
          <b>{t("In the realm of Front End development")}</b>{t(" : I have a genuine passion for crafting appealing applications that also prioritize usability and User Experience.")}<br/>
          </p>

          <p>
          <b>{t("As for the Back End")}</b>{t(", being a foundational element in the overall development process, I am captivated by the responsibility of building, expanding, and maintaining robust, clear, and integrated server-sideapplications.")}
          </p>

          <p>
          <b>{t("As a Designer")}</b>{t(", I have accumulated over 10 years of professional experience, directly responsible for designing, managing, and executing numerous projects for individuals, businesses, and companies.")}
          </p>

          <p>
            <b>{t("My main aim is to create and deliver high-end and innovative products for a variety of clients. If you are in need of an Software Developer, I am")}</b>{" "}
            <a href="mailto:alessandro.tanus@gmail.com?subject=Hire%20Alessandro%20Tanus!">
              {t("available for hire.")}
            </a>
          </p>

          <span className="extra-info">
            {t("ARE YOU SEEKING TO EXPAND YOUR DEVELOPMENT TEAM OR HAVE A PROJECT YOU'D LIKE TO DISCUSS, I'D LOVE TO ")}{" "}
            <a href="#contact">{t("HEAR ABOUT IT")}</a>
          </span>
        </article>
      </a.div>
    </Section>
  );
};

export default About;
