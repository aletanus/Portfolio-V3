import React from "react";
import stacks from "../../db/stacks";
import StackCard from "./StackCard";
const StacksGrid = () => {

  return (
    <ul className="stacks__grid">
      {
        stacks.map((stack) => (
          <StackCard key={stack.title} stack={stack} />
        ))
      } 
    </ul>
  );
};

export default StacksGrid;
