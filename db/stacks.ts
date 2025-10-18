import { IconType } from "react-icons";
import { FaGithub, FaWordpressSimple } from "react-icons/fa";
import { SiNextdotjs, SiExpress } from "react-icons/si";

const stacks = [
  { title: "React", img: "/stacks/react.svg" },
  { title: "Next", img: SiNextdotjs },
  { title: "Node.JS", img: "/stacks/node-js.svg" },
  { title: "Figma", img: "/stacks/figma.svg" },
  { title: "WordPress", img: FaWordpressSimple },
  { title: "Python", img: "/stacks/python.svg" },
  { title: "JavaScript", img: "/stacks/javascript.svg" },
  { title: "TypeScript", img: "/stacks/typescript.svg" },
  { title: "Django", img: "/stacks/django.svg" },
  { title: "PostgreSQL", img: "/stacks/postgresql.svg" },
  { title: "SQLite", img: "/stacks/sqlite.svg" },
  { title: "Express", img: SiExpress },
  { title: "Nest", img: "/stacks/nest-js.svg" },
  { title: "Prisma", img: "/stacks/prisma-orm.svg" },
  { title: "Jest", img: "/stacks/jest.svg" },
  { title: "Cypress", img: "/stacks/cypress.svg" },
  { title: "JWT", img: "/stacks/jwt.svg" },
  { title: "Git", img: "/stacks/git.svg" },
  { title: "GitHub", img: FaGithub },
  { title: "HTML", img: "/stacks/html-5.svg" },
  { title: "CSS", img: "/stacks/css-3.svg" },
  { title: "Sass", img: "/stacks/sass.svg" },
  { title: "Tailwind CSS", img: "/stacks/tailwindcss.svg" },
  { title: "Styled Components", img: "/stacks/styled-components.svg" },
];

export type stacksType = {
  title: string;
  img: IconType | string;
};

export default stacks
