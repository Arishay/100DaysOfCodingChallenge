//Question 17
//Shrinking Guest List
var guestList = ["Aina", "Hunny", "Haniya"];
console.log("I have found a bigger dinner table!");
//adding Guests
guestList.unshift("Zara");
guestList.splice(guestList.length / 2, 0, "Ayesha");
guestList.push("Afiya");
guestList.forEach(function (guest) {
    console.log("".concat(guest, " will you come to join me for dinner"));
});
//changing Guest list    
console.log("I can invite only two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guestList.splice(0, guestList.length);
console.log(guestList);
