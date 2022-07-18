import ProjectCard from "./ProjectCard";

const ProjectList = ({ data }) => {
  return (
    <ul className="cards">
      {data.map((project) => (
        <li className="card" key={project.id} id={project.id}>
          <ProjectCard
            id={project.id}
            title={project.title}
            description={project.description}
            img={project.img}
            tags={project.tags}
            code={project.code}
            live={project.live}
            repo={project.repo}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
