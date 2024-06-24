//Question 44
//Sandwiches:
//create a function with rest parameter
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMake a sandwich with the following items:\n");
    items.forEach(function (anItem) {
        console.log(anItem);
    });
    console.log("\nEnjoy your Sandwich");
}
;
//calling the function
sandwich("Tomato", "Lettuce", "Chili sauce");
sandwich("ketchup", "chicken", "onion", "Mayo");
sandwich("bbq Sauce", "kabab", "egg");
