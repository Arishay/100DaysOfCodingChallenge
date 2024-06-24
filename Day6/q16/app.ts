//Question 16
//More Guests

let guest:string[] = ["Aina" , "Hunny" , "Haniya"];
console.log("I have found a bigger dinner table!");
//adding Guests
guest.unshift("Zara")
guest.splice(guest.length/2, 0, "Ayesha");
guest.push("Afiya");
guest.forEach(guest => {
    console.log(`${guest} will you come to join me for dinner`);   
});