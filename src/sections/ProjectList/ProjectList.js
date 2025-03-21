import ModuleProject from "components/ModuleProject/ModuleProject";

import { PROJECT_LIST_DATA } from "constants/projectListData";

const ProjectsList = () => {
  return (
    <div id="projectList" className="flex flex-col md:gap-y-0 gap-y-24 sm:px-[20px] px-[5px]">
      {PROJECT_LIST_DATA.map(project => (
        <ModuleProject
          key={project.id}
          number={project.number}
          projectName={project.projectName}
          rule={project.rule}
          description={project.description}
          show={project.show}
          liveLink={project.liveLink}
          gitHub={project.gitHub}
          projectImages={project.projectImages}
        />
      ))}
    </div>
  );
};

export default ProjectsList;