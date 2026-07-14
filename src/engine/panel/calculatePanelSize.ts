/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import { PanelDimensions }

from "../../types/PanelDimensions";

export function calculatePanelSize(

componentCount:number

):PanelDimensions{

    if(componentCount<=5){

        return{

            width:600,

            height:800,

            depth:250

        };

    }

    if(componentCount<=15){

        return{

            width:800,

            height:1200,

            depth:300

        };

    }

    return{

        width:1000,

        height:1800,

        depth:400

    };

}
