/*****************************************************************
 * Karatech ELV
 * Import Project
 *****************************************************************/

import { PanelComponent } from "../types/PanelComponent";

export function importProject(

    file:File

):Promise<PanelComponent[]>{

    return new Promise((resolve)=>{

        const reader=new FileReader();

        reader.onload=(e)=>{

            resolve(

                JSON.parse(

                    e.target?.result as string

                )

            );

        };

        reader.readAsText(file);

    });

}
