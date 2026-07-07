/*========================================
 KARATECH ELV
 Search Engine V1
========================================*/

const searchInput =
document.getElementById("searchBox");

searchInput.addEventListener("keyup",function(event){

    if(event.key==="Enter"){

        const value=

        searchInput.value

        .trim()

        .toLowerCase();

        console.log(value);

    }

});
