import projects from "../services/projects.json";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <section className="projects wrapper" id="projects">
      <h2 className="title title__2">Projects</h2>
      <ProjectList data={projects} />
    </section>
  );
};
export default Projects;
