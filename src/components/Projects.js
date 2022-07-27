import ProjectList from "./ProjectList";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t] = useTranslation("projects");
  return (
    <section className="projects wrapper" id="projects">
      <h2 className="title title__2">{t("title")}</h2>
      <ProjectList />
    </section>
  );
};
export default Projects;
