import React, { useEffect } from "react";
import Section from "../main/Section";
import { useTrail, a, config } from "@react-spring/web";
import Image from "next/image";
import { renderCanvas } from './renderCanvas';

interface heroProps {
  heroRef?: React.MutableRefObject<null>;
}

const Hero: React.FC<heroProps> = ({ heroRef }) => {
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
    setTimeout(() => {
      api.start({
        y: 0,
        opacity: 1,
      });
    }, 1000);
  }, []);

  useEffect(() => {
    renderCanvas();
  }, []);

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
        <a.h1 style={springs[1]}>Hi, my name is</a.h1>
        <a.h2 style={springs[1]}>Alessandro Tanus.</a.h2>
        <a.p style={springs[2]}>
          I can help you build a product, feature, or website. Look through some of
          my work and experience. Whether you&apos;re seeking to expand your development team or have a 
          project you&apos;d like to discuss, <b>if you like what you see, feel free to contact me.
          I am available for hire</b>.
        </a.p>
        <a.a href="#featured" style={springs[3]}>
          <button tabIndex={-1}>Check out my work!</button>
        </a.a>
      </div>
      <canvas className="canvas" id="canvas"></canvas>
    </Section>
  );
};

export default Hero;
