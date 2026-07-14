/*****************************************************************
 * Karatech ELV
 * File : project.service.ts
 *****************************************************************/

import { Project } from "../database/project.model";

const STORAGE="karatech-projects";

export function getProjects():Project[]{

    return JSON.parse(

        localStorage.getItem(STORAGE) || "[]"

    );

}

export function saveProjects(projects:Project[]){

    localStorage.setItem(

        STORAGE,

        JSON.stringify(projects)

    );

}

export function addProject(project:Project){

    const projects=getProjects();

    projects.push(project);

    saveProjects(projects);

}
