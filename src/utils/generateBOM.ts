/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import { PanelComponent } from "../types/PanelComponent";
import { BOMItem } from "../types/BOMItem";

export function generateBOM(
    components:PanelComponent[]
):BOMItem[]{

    const map=new Map<string,number>();

    components.forEach(c=>{

        map.set(
            c.name,
            (map.get(c.name)||0)+1
        );

    });

    return [...map.entries()].map(([name,quantity])=>({

        name,

        quantity

    }));

}
