//Question 18
//Seeing the World

let placesToVisit:string[]=["Malaysia","SaudiArabia","Dubai","London","Canada"];
console.log("Original Order",placesToVisit);// original order.

//printing array in albhabetical order
console.log("Alphabetical Order:",[...placesToVisit].sort());

// Showing that my array is still in its original order by printing it.
console.log("Original order",placesToVisit);

//Printing array in reverse order
console.log("Reverse Order",[...placesToVisit].reverse());

// Showing that my array is still in its original order by printing it.
console.log("Original order",placesToVisit);

//Reversed the order of list. Print the array to show that its order has changed.
console.log("Reversed order of original array:",placesToVisit.reverse());

//Reversed the order of list again. Printed the list to show it’s back to its original order.
console.log("Back to original order:",placesToVisit.reverse());

//Sorted array to store in alphabetical order. Printed the array to show its changed order.
console.log("Alphabatical orrder of original array:",placesToVisit.sort());

//Again Sorted to show array in reverse alphabetical order. Printed to show its order has changed.
console.log("reverse Alphabatical order of original array:",placesToVisit.reverse());
