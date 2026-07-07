/*****************************************************************
 * Karatech ELV
 * IEC 60364 Base Engine
 *****************************************************************/

export interface IECInput{

    voltage:number;

    current:number;

    length:number;

    powerFactor:number;

    ambientTemperature:number;

    installationMethod:string;

}

export interface IECResult{

    voltageDrop:number;

    cableSize:number;

    breaker:number;

}

export function calculateIEC(

    input:IECInput

):IECResult{

    return{

        voltageDrop:0,

        cableSize:0,

        breaker:0

    };

}
