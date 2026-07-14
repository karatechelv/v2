/*****************************************************************
 * Karatech ELV
 * File : RecentProjects.tsx
 *****************************************************************/

import "./RecentProjects.css";

function RecentProjects(){

    const project=JSON.parse(

        localStorage.getItem("karatech-current-project") || "{}"

    );

    return(

        <div className="recentProjects">

            <h2>آخرین پروژه</h2>

            <p><b>نام:</b> {project.projectName || "-"}</p>

            <p><b>کارفرما:</b> {project.client || "-"}</p>

            <p><b>محل:</b> {project.location || "-"}</p>

        </div>

    );

}

export default RecentProjects;
