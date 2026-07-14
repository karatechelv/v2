/*****************************************************************
 * Karatech ELV
 * Export Project
 *****************************************************************/

import { PanelComponent } from "../types/PanelComponent";

export function exportProject(

    components:PanelComponent[]

){

    const json=JSON.stringify(

        components,

        null,

        2

    );

    const blob=new Blob(

        [json],

        {

            type:"application/json"

        }

    );

    const url=URL.createObjectURL(blob);

    const a=document.createElement("a");

    a.href=url;

    a.download="Karatech_Project.json";

    a.click();

    URL.revokeObjectURL(url);

}
