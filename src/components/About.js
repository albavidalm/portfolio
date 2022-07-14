import albapicture from "../assets/images/albavidal.jpg";
import { Skills } from "./Skills";
import Button from "./ui/Button";
import resume from "../assets/files/CV_Vidal_Moscardo_ENG.pdf";

const About = () => {
  return (
    <section className="about wrapper" id="about">
      <h2 className="title title__2">About me</h2>

      <div className="about__container--info">
        <div className="about__container--image">
          <img className="about__image" alt="This is Alba" src={albapicture} />
        </div>

        <div className="text">
          <p className="about__text">
            Hi! My name is Alba and I like to create online things. Although I
            didn't know what web development was yet, my interest in it started
            some time ago when I was trying to customize Blogger and Tumblr
            themes.
          </p>
          <p className="about__text">
            I focused my professional career on administration and business
            management and during these years I have improved and enhanced my
            ability to solve problems, organization, self-learning and adapting
            to change (as when I went to work in a clothing shop in another
            country).
          </p>
          <p className="about__text">
            Some time ago, after having made some WordPress websites, my
            programming bug started growing again so I took some courses on my
            own (a vice I still have) until I finally finished my Web
            Application Development bootcamp at Adalab.
          </p>
          <p className="about__text">
            If I'm not programming I'm probably reading, learning to play the
            piano, doing Crossfit or looking for a weekend plan.
          </p>
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
