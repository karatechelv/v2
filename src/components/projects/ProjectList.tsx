/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import { getProjects } from "../../services/project.service";

import ProjectCard from "./ProjectCard";

function ProjectList(){

    const projects=getProjects();

    return(

        <>

            {

                projects.map(project=>(

                    <ProjectCard

                        key={project.id}

                        project={project}

                    />

                ))

            }

        </>

    );

}

export default ProjectList;
