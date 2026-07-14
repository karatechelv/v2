/*========================================
 KARATECH ELV
 Date System
========================================*/

const dateElement = document.getElementById("date");

function updateDate(){

    const today = new Date();

    const language =
        document.getElementById("language");

    if(language){

        if(language.value==="fa"){

            dateElement.innerHTML=
                today.toLocaleDateString("fa-IR");

        }

        else{

            dateElement.innerHTML=
                today.toLocaleDateString("en-US");

        }

    }

}

updateDate();

setInterval(updateDate,1000);
