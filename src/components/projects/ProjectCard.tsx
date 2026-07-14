/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import { Project } from "../../database/project.model";

import "./ProjectCard.css";

type Props={

    project:Project;

}

function ProjectCard({project}:Props){

    return(

        <div className="projectCard">

            <h3>

                {project.projectName}

            </h3>

            <p>

                {project.client}

            </p>

            <p>

                {project.location}

            </p>

            <p>

                {project.panelType}

            </p>

        </div>

    )

}

export default ProjectCard;
