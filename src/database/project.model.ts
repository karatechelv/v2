/*****************************************************************
 * Karatech ELV
 * File : project.model.ts
 * Description :
 * Project Model
 *****************************************************************/

export interface Project {

    id:number;

    projectName:string;

    client:string;

    location:string;

    consultant:string;

    contractor:string;

    voltage:number;

    frequency:number;

    panelType:string;

    ip:string;

    created:string;

    modified:string;

}
