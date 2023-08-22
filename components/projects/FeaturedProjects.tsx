import { useTranslation } from 'react-i18next';
import React, { useRef } from "react";
import Section from "../main/Section";
import projects from "../../db/projects";
import FeaturedProject from "./FeaturedProject";
import { a, useSpring } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface FeaturedProjectsProps {
  featuredRef: React.MutableRefObject<null>;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ featuredRef }) => {
  
  const { t } = useTranslation();
  
  const headerRef = useRef(null);
  const [spring, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 40,
    },
  }));

  useIntersectionObserver(headerRef, () => {
    api.start({
      opacity: 1
    })
  });

  return (
    <Section label="featured" sectionRef={featuredRef}>
      <a.header ref={headerRef} style={spring}>
        <h2>{t("Featured Projects")}</h2>
      </a.header>
      <div className="featuredProjects">
        {projects.slice(0, 5).map((projectProp) => (
          <FeaturedProject key={projectProp.title} {...projectProp} />
        ))}
      </div>
    </Section>
  );
};

export default FeaturedProjects;
