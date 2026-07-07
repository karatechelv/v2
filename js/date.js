function updateDate(){

const now=new Date();

const options={

year:"numeric",

month:"long",

day:"numeric"

};

document.getElementById("date").innerHTML=

now.toLocaleDateString("en-US",options);

}

updateDate();
