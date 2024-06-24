//Question 15
//Changing Guest List

let guest:string[] = ["Aliza" , "Hunny" , "Haniya"];

guest.forEach(guest => {
    console.log(`${guest}, will you come to join me for dinner?`);
});

let isNotComing = "Aliza";
console.log(`${isNotComing} can't make the dinner.`);

guest.splice(0 , 1,"Aina");

// New invitation
guest.forEach(guest => {
    console.log(`${guest}, will you come to join me for dinner?`);
});