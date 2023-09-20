import { useTranslation } from "react-i18next";
import { useTrail, animated } from "@react-spring/web";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import socialLinks from "../../db/social_links";
import { storeType } from "../../redux/configureStore";
import toggleDarkMode from "../../utils/darkModeHelper";
import Logo from "./Logo";
import FlagsSelect from "react-flags-select";
import { changeLanguage } from '../../redux/slices/translation_slice';

const MobileNavigation = () => {
  
  const { t, i18n } = useTranslation();
  const selectedLanguage = useSelector((state: storeType) => state.translation.selectedLanguage);
  const dispatch = useDispatch();
  const toggleLanguage = () => {
    const newLanguage = selectedLanguage === "en" ? "pt" : "en";
    dispatch(changeLanguage(newLanguage));
  };
  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);


  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);
  const currentSection = useSelector(
    (store: storeType) => store.currentSection
  );
  const sectionActiveFor = (arr: any[]) => 
    arr.includes(currentSection.name) ? 'active' : '';

  function handleNavToggle() {
    setIsActive(!isActive);
  }

  const [trails, api] = useTrail(socialLinks.length, () => ({
    opacity: 0,
    y: 25,
    rotateX: '45deg',
    config: {
      mass: 5,
      tension: 2000,
      friction: 130
    }
  }))

  api.start({
    to: {
      opacity: isActive ? 1: 0,
      y: isActive ? 0 : 15,
      rotateX: isActive ? '0deg' : '45deg'
    }
  })

  useEffect(() => {
    setDarkMode(
      !!JSON.parse(localStorage?.getItem("alta-portfolio-web-config") || "{}")
        ?.darkMode
    );
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > prevScrollY.current && scrollY > 200) {
        setSticky(false);
      } else {
        setSticky(true);
      }
      prevScrollY.current = scrollY
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const curriculmVitae = i18n.language === "en" ? "/assets/Curriculum Vitae - Alessandro Tanus_English.pdf" : "/assets/Curriculum Vitae - Alessandro Tanus_Portugês.pdf";
  const handleDownloadClick = () => {
    window.open(`${curriculmVitae}`, "_blank");
  };

  return (
    <header className={sticky ? "header sticky" : "header"} ref={headerRef}>
      <nav className="m_navigation" aria-label="Navigation">
        <div className="logo"><Logo /></div>
          <FlagsSelect
            aria-label="Select Country - Translation"
            className="flagsSelect"
            selectButtonClassName="flagSelect"
            selected={selectedLanguage === "en" ? "US" : "BR"}
            onSelect={toggleLanguage}
            countries={["US", "BR"]}
            customLabels={{"US": { primary: "EN"}, "BR": { primary: "PT"} }}
            showSelectedLabel={false}
          />
          <DarkModeSwitch
          checked={isDarkMode}
          onChange={(checked) => {
            toggleDarkMode(setDarkMode, checked);
          }}
        />
        <button
          aria-label="Open Navigation Menu"
          className={
            isActive ? "m_navigation__toggle active" : "m_navigation__toggle"
          }
          onClick={handleNavToggle}
        >
          <div className="hamburger"></div>
        </button>
        <ul className="m_navigation__links">
          <li className="social-links" aria-label="social-links">{
            trails.map((style, i) => (
              <animated.a
              key={i}
              title={socialLinks[i].title}
              target="_blank"
              rel="noopener noreferrer"
              href={socialLinks[i].href}
              style={{
                perspective: '3d',
                ...style
              }}
              >
                {socialLinks[i].icon}
              </animated.a>
            ))
          }
          </li>
          <li>
            <a href="#content" className={sectionActiveFor(['hero'])} onClick={handleNavToggle}>{t("Home")}</a>
          </li>
          <li>
            <a href="#about" className={sectionActiveFor(['about'])} onClick={handleNavToggle}>{t("About")}</a>
          </li>
          <li>
            <a href="#stacks" className={sectionActiveFor(['stacks'])} onClick={handleNavToggle}>{t("Stacks")}</a>
          </li>
          <li>
            <a href="#featured" className={sectionActiveFor(['featured'])} onClick={handleNavToggle}>{t("Projects")}</a>
          </li>
          {/* <li>
            <a href="#testimonials" className={sectionActiveFor(['testimonials'])} onClick={handleNavToggle}>Testimonials</a>
          </li> */}
          <li>
            <a href="#contact" className={sectionActiveFor(['contact'])} onClick={handleNavToggle}>{t("Contact")}</a>
          </li>
          <li className="navigation__linkResume">
            <a href={curriculmVitae} rel="noreferrer noopener" download target={'_blank'}>
              <button onClick={handleDownloadClick}  tabIndex={-1}>{t("Resume")}</button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileNavigation;
