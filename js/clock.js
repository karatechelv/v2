/*========================================
 KARATECH ELV
 Clock System
========================================*/

const clockElement = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");

    if (clockElement) {

        clockElement.innerHTML =
            hour + ":" +
            minute + ":" +
            second;

    }

}

updateClock();

setInterval(updateClock,1000);
