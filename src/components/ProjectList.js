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
            imgGif={project.imgGif}
            tags={project.tags}
            code={project.code || undefined}
            live={project.live || undefined}
            repo={project.repo || undefined}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
