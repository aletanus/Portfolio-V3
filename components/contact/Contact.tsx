import { useTranslation } from 'react-i18next';
import React, { useRef } from "react";
import Section from "../main/Section";
import ContactForm from "./ContactForm";
import { a, useSpring } from "@react-spring/web";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface ContactProps {
  contactRef: React.MutableRefObject<null>;
}

const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  
  const { t } = useTranslation();
  
  const headerRef = useRef(null);
  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
      y: 20
    },
    config: {
      tension: 200,
      friction: 40,
    },
  }));

  useIntersectionObserver(headerRef, () => {
    api.start({
      opacity: 1,
      y: 0
    })
  })

  return (
    <Section label="contact" sectionRef={contactRef}>
      <a.header ref={headerRef} style={springs}>
        <h2>{t("Contact Me")}</h2>
      </a.header>
      {/* <a.p style={springs}>
        {t("If you are interested in ")}<b>{t("developing")}</b>{t(" a system, have a feature that you need built or have a project that needs ")}<b>{t("coding")}</b>{t(". I'd love to help you with it!")}
      </a.p> */}
      <a.p style={springs}>
        {t("Are you looking to ")}
        <b>{t("expand your development team")}</b>
        {t(" or ")}
        <b>{t("need a professional to build a system")}</b>
        {t(", ")}
        <b>{t("app")}</b>
        {t(" or ")}
        <b>{t("interface")}</b>
        {t("?")}
      </a.p>
      <ContactForm />
    </Section>
  );
};

export default Contact;
