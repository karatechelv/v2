/*========================================
 KARATECH ELV
 Journey Timer
========================================*/

const journeyElement =
document.getElementById("journey");

let journeySeconds = 0;

function updateJourney(){

    journeySeconds++;

    let h =
    Math.floor(journeySeconds/3600);

    let m =
    Math.floor((journeySeconds%3600)/60);

    let s =
    journeySeconds%60;

    h=String(h).padStart(2,"0");

    m=String(m).padStart(2,"0");

    s=String(s).padStart(2,"0");

    journeyElement.innerHTML=

    "Journey : "

    +

    h

    +

    ":"

    +

    m

    +

    ":"

    +

    s;

}

setInterval(updateJourney,1000);
