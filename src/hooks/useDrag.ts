/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import { useState } from "react";

export function useDrag(){

    const[dragging,setDragging]=useState(false);

    return{

        dragging,

        start:()=>setDragging(true),

        stop:()=>setDragging(false)

    };

}
