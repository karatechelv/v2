/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import {

CopperCableDatabase

}

from "../../database/abb/Cables/CopperCableDatabase";

export function selectCable(

current:number

){

    return CopperCableDatabase.find(

        cable=>

        cable.ampacity>=current

    );

}
