import albapicture from "../assets/images/albavidal.jpg";
import { Skills } from "./Skills";
import Button from "./ui/Button";
import resume from "../assets/files/CV_Vidal_Moscardo_ENG.pdf";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const About = () => {
  const [t] = useTranslation("aboutme");
  return (
    <section className="about wrapper" id="about">
      <h2 className="title title__2">{t("title")}</h2>

      <div className="about__container--info">
        <div className="about__container--image">
          <img className="about__image" alt="This is Alba" src={albapicture} />
        </div>

        <div className="text">
          <Trans i18nKey="multiline">
            <p className="about__text">{t("description")}</p>
          </Trans>
          <div className="about__buttons">
            <a href={resume} target="_blank" rel="noreferrer">
              <Button className="resume">
                <span></span>
              </Button>
            </a>
            <a href="#contact">
              <Button className="talk"></Button>
            </a>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
};
export default About;
