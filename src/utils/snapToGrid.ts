/*****************************************************************
 * Karatech ELV
 * Snap To Grid
 *****************************************************************/

export function snapToGrid(value:number,size:number=25){

    return Math.round(value/size)*size;

}
