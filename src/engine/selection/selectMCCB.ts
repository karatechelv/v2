/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import {

MCCBDatabase

}

from "../../database/abb/Protection/MCCBDatabase";

export function selectMCCB(

current:number

){

    return MCCBDatabase.find(

        breaker=>

        breaker.ratedCurrent>=current

    );

}
