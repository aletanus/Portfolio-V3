import React, { useRef } from "react";
import { stacksType } from "../../db/stacks";
import { a, useSpring } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Image from "next/image"

const StackCard: React.FC<{ stack: stacksType }> = ({ stack }) => {
  const handleMouseMove = (event: any) => {
    const { currentTarget: target } = event;

    const rect = target.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const stackRef = useRef(null);
  const [spring, api] = useSpring(() => ({
    from: {
      y: 50,
      opacity: 0,
      scale: 0.99
    },
    config: {
      tension: 200,
      friction: 50,
    },
  }));

  useIntersectionObserver(stackRef, () => {
    api.start({
      y: 0,
      opacity: 1,
      scale: 1
    })
  }, "15%");

  return (
    <a.li className={`stackCard ${stack.title}`} ref={stackRef} style={spring} >   
      <h2 className={`${stack.title}`}>{stack.title}</h2>
      <div className="stackCard__container" onMouseMove={handleMouseMove}>
        { 
          typeof stack.img === "string" ? ( 
            <Image className="stack" src={stack.img} alt={stack.title} width={64} height={64}/>
          ) : (
            stack.img({ size: "4rem", className: "stackCard__icon custom-color" })
          )
        }
      </div>
    </a.li>
  );
};

export default StackCard;
