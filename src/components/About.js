import albapicture from "../assets/images/albavidal.jpg";
import { Skills } from "./Skills";
const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="title title__2">About me</h2>
      <img className="about__image" alt="This is Alba" src={albapicture} />
      <p className="about__text">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button className="button">Resume</button>
      <button className="button">Let's talk</button>
      <Skills />
    </section>
  );
};
export default About;
