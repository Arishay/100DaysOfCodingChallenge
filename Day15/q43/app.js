//created array for names of magicians
var magiciansName = ["Aina", "Ayesha", "Hani"];
//create the function and pass the array
function show_magician(magiciansName) {
    magiciansName.forEach(function (magicians) {
        console.log(magicians);
    });
}
//create another function make_great
function make_great(magiciansName) {
    for (var i = 0; i < magiciansName.length; i++) {
        magiciansName[i] = magiciansName[i] + " the Great";
    }
}
//creating copy of original array through slice()
var copy_magiciansName = magiciansName.slice();
//modify copy array
var copy_make_great = make_great(copy_magiciansName);
//calling both array 
// original array
console.log("Original Array:\n");
show_magician(magiciansName);
//copied Array
console.log("\nCopied Array:\n");
show_magician(copy_magiciansName); //copied
