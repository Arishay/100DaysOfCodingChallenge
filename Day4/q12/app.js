//ASSIGNMENT# 12
//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them.The text of each 
//message should be the same,but each message should be personalized with the person’s name.
var friends = ["Zara", "Aina", "Amna", "Huma"];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var name_1 = friends_1[_i];
    console.log("Hello! ".concat(name_1, ", Happy friendship day"));
}
