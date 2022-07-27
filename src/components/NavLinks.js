import React from "react";
import LanguageButtons from "./LanguageButtons";
import Social from "./Social";
import { useTranslation } from "react-i18next";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const [t] = useTranslation("navbar");
  return (
    <>
      <div className="navList">
        <ul className="navLinks">
          <li
            className="navList__element"
            onClick={() => isMobile && closeMobileMenu()}
          >
            <a className="navList__element--item" href="#about">
              {t("about")}
            </a>
          </li>
          <li
            className="navList__element"
            onClick={() => isMobile && closeMobileMenu()}
          >
            <a className="navList__element--item" href="#projects">
              {t("projects")}
            </a>
          </li>
          <li
            className="navList__element"
            onClick={() => isMobile && closeMobileMenu()}
          >
            <a className="navList__element--item" href="#contact">
              {t("contact")}
            </a>
          </li>
        </ul>

        {isMobile && (
          <div className="navList__others">
            <LanguageButtons />
            <Social />
          </div>
        )}
      </div>
    </>
  );
};

export default NavLinks;
