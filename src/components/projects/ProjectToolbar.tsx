/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import "./ProjectToolbar.css";

import OpenProject from "./OpenProject";
import DeleteProject from "./DeleteProject";

function ProjectToolbar(){

    return(

        <div className="projectToolbar">

            <OpenProject />

            <DeleteProject />

        </div>

    )

}

export default ProjectToolbar;
