let seconds = 0;

function journeyTimer(){

seconds++;

let h=Math.floor(seconds/3600);

let m=Math.floor((seconds%3600)/60);

let s=seconds%60;

h=String(h).padStart(2,"0");

m=String(m).padStart(2,"0");

s=String(s).padStart(2,"0");

const journey=document.getElementById("journey");

if(journey){

journey.innerHTML="Journey : "+h+":"+m+":"+s;

}

}

setInterval(journeyTimer,1000);
