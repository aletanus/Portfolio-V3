import React, { useRef } from "react";
import Section from "../main/Section";
import { a, useSpring } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import StacksGrid from "./StacksGrid";

interface StacksRef {
  stacksRef: React.MutableRefObject<null>;
}

const Stacks: React.FC<StacksRef> = ({ stacksRef }) => {
  const headerRef = useRef(null);
  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 50,
    },
  }));

  useIntersectionObserver(headerRef, () => {
    api.start({
      opacity: 1
    })
  })

  return (
    <Section label="stacks" sectionRef={stacksRef}>
      <a.header ref={headerRef} style={springs}>
        <h2>Stacks</h2>
      </a.header>
      <StacksGrid />
    </Section>
  );
};

export default Stacks;
