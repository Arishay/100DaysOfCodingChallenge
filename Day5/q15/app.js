//Question 15
//Changing Guest List
var guest = ["Aliza", "Hunny", "Haniya"];
guest.forEach(function (guest) {
    console.log("".concat(guest, ", will you come to join me for dinner?"));
});
var isNotComing = "Aliza";
console.log("".concat(isNotComing, " can't make the dinner."));
guest.splice(0, 1, "Aina");
// New invitation
guest.forEach(function (guest) {
    console.log("".concat(guest, ", will you come to join me for dinner?"));
});
