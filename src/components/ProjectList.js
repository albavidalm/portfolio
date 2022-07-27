//import data from "../services/data.json";
import ProjectCard from "./ProjectCard";
import React from "react";
import { useTranslation } from "react-i18next";

const ProjectList = () => {
  const { t } = useTranslation("projects");
  return (
    <ul className="cards">
      {t("projectsinfo", { returnObjects: true }).map((project) => (
        <React.Fragment key={project.id}>
          {project.show && (
            <li className="card" key={project.id} id={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                img={project.img}
                imgGif={project.imgGif}
                tags={project.tags}
                code={project.code || undefined}
                live={project.live || undefined}
                repo={project.repo || undefined}
                working={project.workingOn || undefined}
              />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default ProjectList;
