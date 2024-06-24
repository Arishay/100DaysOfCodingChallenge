//Question 30
//Hello Admin:
var userNames = ["Admin", "Arisha", "Ali", "Aliza", "Shifa"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
