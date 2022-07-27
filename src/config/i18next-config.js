import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import navbarES from "../languages/es/navbar.json";
import navbarEN from "../languages/en/navbar.json";
import navbarCAT from "../languages/cat/navbar.json";
import aboutmeES from "../languages/es/aboutme.json";
import aboutmeEN from "../languages/en/aboutme.json";
import aboutmeCAT from "../languages/cat/aboutme.json";
import contactES from "../languages/es/contact.json";
import contactEN from "../languages/en/contact.json";
import contactCAT from "../languages/cat/contact.json";
import projectsES from "../languages/es/projects.json";
import projectsEN from "../languages/en/projects.json";
import projectsCAT from "../languages/cat/projects.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: navbarEN,
        aboutme: aboutmeEN,
        contact: contactEN,
        projects: projectsEN,
      },
      es: {
        navbar: navbarES,
        aboutme: aboutmeES,
        contact: contactES,
        projects: projectsES,
      },
      cat: {
        navbar: navbarCAT,
        aboutme: aboutmeCAT,
        contact: contactCAT,
        projects: projectsCAT,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
