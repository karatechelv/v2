/*****************************************************************
 * Karatech ELV
 * ABB MCCB Database
 *****************************************************************/

export interface MCCB{

    manufacturer:string;

    family:string;

    model:string;

    poles:number;

    ratedCurrent:number;

    breakingCapacity:number;

    voltage:number;

}

export const MCCBDatabase:MCCB[]=[

{
manufacturer:"ABB",
family:"Tmax XT",
model:"XT1",
poles:3,
ratedCurrent:16,
breakingCapacity:36,
voltage:690
},

{
manufacturer:"ABB",
family:"Tmax XT",
model:"XT1",
poles:3,
ratedCurrent:20,
breakingCapacity:36,
voltage:690
},

{
manufacturer:"ABB",
family:"Tmax XT",
model:"XT1",
poles:3,
ratedCurrent:25,
breakingCapacity:36,
voltage:690
},

{
manufacturer:"ABB",
family:"Tmax XT",
model:"XT2",
poles:3,
ratedCurrent:63,
breakingCapacity:50,
voltage:690
},

{
manufacturer:"ABB",
family:"Tmax XT",
model:"XT3",
poles:3,
ratedCurrent:160,
breakingCapacity:70,
voltage:690
},

{
manufacturer:"ABB",
family:"Tmax XT",
model:"XT4",
poles:3,
ratedCurrent:250,
breakingCapacity:70,
voltage:690
}

];
