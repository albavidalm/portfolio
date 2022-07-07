import bootstrapIco from "../assets/images/bootstrap.svg";
import clickupIco from "../assets/images/clickup.svg";
import cssIco from "../assets/images/css.svg";
import figmaIco from "../assets/images/figma.svg";
import gitIco from "../assets/images/git.svg";
import githubIco from "../assets/images/github.svg";
import gulpbIco from "../assets/images/gulp.svg";
import htmlIco from "../assets/images/html.svg";
import illustratorIco from "../assets/images/illustrator.svg";
import indesignIco from "../assets/images/indesign.svg";
import jsIco from "../assets/images/JS.svg";
import nodejsIco from "../assets/images/nodejs.svg";
import npmIco from "../assets/images/npm.svg";
import psIco from "../assets/images/ps.svg";
import reactIco from "../assets/images/react.svg";
import sassIco from "../assets/images/sass.svg";
import slackIco from "../assets/images/slack.svg";
import trelloIco from "../assets/images/trello.svg";
import vscIco from "../assets/images/vsc.svg";
import wpIco from "../assets/images/wp.svg";
import zeplinIco from "../assets/images/zeplin.svg";

export const Skills = () => {
  return (
    <article className="skills">
      <h3 className="title title__3">Skills & tools</h3>
      <ul className="skills__list">
        <li>
          <img className="skills__list--icon" alt="Html icon" src={htmlIco} />
        </li>
        <li>
          <img className="skills__list--icon" alt="Css icon" src={cssIco} />
        </li>
        <li>
          <img className="skills__list--icon" alt="Sass icon" src={sassIco} />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="Bootstrap icon"
            src={bootstrapIco}
          />
        </li>
        <li>
          <img className="skills__list--icon" alt="Gulp icon" src={gulpbIco} />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="JavaScript icon"
            src={jsIco}
          />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="React js icon"
            src={reactIco}
          />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="Node js icon"
            src={nodejsIco}
          />
        </li>
        <li>
          <img className="skills__list--icon" alt="npm icon" src={npmIco} />
        </li>
        <li>
          <img className="skills__list--icon" alt="Git icon" src={gitIco} />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="Github icon"
            src={githubIco}
          />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="Visual studio code icon"
            src={vscIco}
          />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="WordPress icon"
            src={wpIco}
          />
        </li>
        <li>
          <img className="skills__list--icon" alt="Figma icon" src={figmaIco} />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="Zeplin icon"
            src={zeplinIco}
          />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="Photoshop icon"
            src={psIco}
          />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="InDesign icon"
            src={indesignIco}
          />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="Illustrator icon"
            src={illustratorIco}
          />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="Trello icon"
            src={trelloIco}
          />
        </li>
        <li>
          <img className="skills__list--icon" alt="Slack icon" src={slackIco} />
        </li>
        <li>
          <img
            className="skills__list--icon"
            alt="Clickup icon"
            src={clickupIco}
          />
        </li>
      </ul>
    </article>
  );
};
