/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import { CableAmpacity }

from "../../database/iec/CableAmpacity";

export function selectCableIEC(

current:number

){

    const sizes=Object.keys(

        CableAmpacity

    );

    for(

        const size of sizes

    ){

        if(

            CableAmpacity[Number(size) as keyof typeof CableAmpacity]

            >=current

        ){

            return Number(size);

        }

    }

    return 300;

}
