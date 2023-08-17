import React from "react";
import Section from "../main/Section";
import { a, useTrail } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface AboutProps {
  aboutRef?: React.MutableRefObject<null>;
}

const About: React.FC<AboutProps> = ({ aboutRef }) => {
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
        <h2>About Me</h2>
      </a.header>
      <a.div className="about__container" style={springs[1]}>
        <article className="about__content">
          <p>
            Hello! My name is <b>Alesandro Tanus</b> and I&apos;m a 
            Computer Science Student, Full Stack Developer and Bachelor 
            in Product Design with extensive experience in project development.
            I thoroughly enjoy working as a <b>Full Stack Developer</b>, 
            yet I find myself equally at ease focusing on either 
            the front end or the back end whenever the need arises.
          </p>

          <p>
          <b>When it comes to the Front End</b> : I have a genuine passion 
          for crafting appealing applications that also deliver a 
          seamless User Experience.<br/>
          </p>

          <p>
          <b>As for the Back End</b>, being a foundational element in the overall 
          development process, I am captivated by the challenge of building, 
          expanding, and maintaining robust, clear, and integrated server-side
          applications.
          </p>

          <p>
          <b>As a Designer</b>, I have accumulated over 10 years of professional 
          experience, directly responsible for designing, managing, and executing 
          dozens of projects for individuals, businesses, and companies.
          </p>

          <p>
            <b>My main aim is to create and deliver unique, high-end and innovative
            products for a variety of clients. If you are in need of an
            experienced Software Engineer, I am</b>{" "}
            <a href="mailto:alessandro.tanus@gmail.com?subject=Hire%20Alessandro%20Tanus!">
              available for hire.
            </a>
          </p>

          <span className="extra-info">
            HAVE A GOOD APPLICATION OR WEBSITE YOU&apos;D LIKE TO DISCUSS? I&apos;D LOVE TO{" "}
            <a href="#contact">HEAR ABOUT IT</a>
          </span>
        </article>
      </a.div>
    </Section>
  );
};

export default About;
