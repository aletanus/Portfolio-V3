import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    title: "Github",
    href: "https://github.com/aletanus",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/alessandro-tanus/",
    icon: <FaLinkedinIn />,
  },
  {
    title: "Gmail",
    href: "mailto:alessandro.tanus@gmail.com",
    icon: <SiGmail />,
  },
];
export default socialLinks;
export type socialLinksType = typeof socialLinks;

