//Question 17
//Shrinking Guest List

let guestList:string[] = ["Aina" , "Hunny" , "Haniya"];
console.log("I have found a bigger dinner table!");
//adding Guests
guestList.unshift("Zara")
guestList.splice(guestList.length/2, 0, "Ayesha");
guestList.push("Afiya");
guestList.forEach(guest => {
    console.log(`${guest} will you come to join me for dinner`);   
});
//changing Guest list    
console.log("I can invite only two people for dinner.");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guestList.splice(0, guestList.length);
console.log(guestList);