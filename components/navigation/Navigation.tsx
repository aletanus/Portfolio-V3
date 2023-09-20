import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { storeType } from "../../redux/configureStore";
import toggleDarkMode from "../../utils/darkModeHelper";
import Logo from "./Logo";
import { a, useTrail } from "@react-spring/web";
import Link from "next/link";
import FlagsSelect from "react-flags-select";
import { changeLanguage } from "../../redux/slices/translation_slice";

const Navigation = () => {

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

  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const currentSection = useSelector((store: storeType) => store.currentSection);
  const sectionActiveFor = (arr: any[]) => arr.includes(currentSection.name) ? "active" : "";

  const [springs, api] = useTrail(6, () => ({
    from: {
      opacity: 0,
      y: -50,
    },
    config: {
      tension: 350,
      friction: 40,
    },
  }));

  useEffect(() => {
    setDarkMode(
      !!JSON.parse(localStorage?.getItem("alta-portfolio-web-config") || "{}")
        ?.darkMode
    );

    api.start({
      opacity: 1,
      y: 0,
    });

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
    <header ref={headerRef} className={sticky ? "header sticky" : "header"}>
      <nav className="navigation" aria-label="Navigation">
        <div className="logo">
          <Logo />
        </div>
        <ul className="navigation__links">
          <a.li style={springs[0]}>
            <Link
              href="#content"
              className={sectionActiveFor(["hero"])}
              scroll={false}
            >
              {t('Home')}
            </Link>
          </a.li>
          <a.li style={springs[1]}>
            <Link
              href="#about"
              className={sectionActiveFor(["about"])}
              scroll={false}
            >
              {t('About')}
            </Link>
          </a.li>
          <a.li style={springs[2]}>
            <Link
              href="#stacks"
              className={sectionActiveFor(["stacks"])}
              scroll={false}
            >
              {t('Stacks')}
            </Link>
          </a.li>
          <a.li style={springs[3]}>
            <Link
              href="#featured"
              className={sectionActiveFor(["featured"])}
              scroll={false}
            >
              {t('Projects')}
            </Link>
          </a.li>
          {/* <a.li style={springs[3]}>
            <Link
              href="#testimonials"
              className={sectionActiveFor(["testimonials"])}
              scroll={false}
            >
              Testimonials
            </Link>
          </a.li> */}
          <a.li style={springs[4]}>
            <Link
              href="#contact"
              className={sectionActiveFor(["contact"])}
              scroll={false}
            >
              {t('Contact')}
            </Link>
          </a.li>
          <a.li className="navigation__linkResume" style={springs[5]}>
            <Link
              href={curriculmVitae}
              rel="noreferrer noopener"
              target={"_blank"}
              download
            >
              <button onClick={handleDownloadClick}  tabIndex={-1}>{t('Resume')}</button>
            </Link>
          </a.li>
          <li>
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
          </li>
          <li aria-label="Toggle dark mode">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={(checked) => {
                toggleDarkMode(setDarkMode, checked);
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
