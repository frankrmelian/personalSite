import React from "react";
import ProjectItem from "./project-item";
import type { Project, ProjectsPage } from "../../types";

interface ProjectsProps {
  data: Project[];
  pageData: ProjectsPage;
}

const Projects: React.FC<ProjectsProps> = ({ data, pageData }) => {
  return (
    <div id="projects" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest text-on-background">
        {pageData.title}
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {data.map((object, index) => (
          <ProjectItem
            key={object.name}
            name={object.name}
            stars={object.stars}
            lib={object.framework}
            description={object.description}
            href={object.href}
            lastCommitMessage={object.lastCommitMessage}
            lastCommitDate={object.lastCommitDate}
            readmeTitle={object.readmeTitle}
            commitCount={object.commitCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
