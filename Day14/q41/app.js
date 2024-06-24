//Question 41
//Magician:
//Make a array of magician’s names
var magiciansName = ["Aina", "Ayesha", "Hani"];
//Create a function & pass the array in function
function show_magicians(magiciansName) {
    magiciansName.forEach(function (magicians) {
        console.log(magicians);
    });
}
//Call the function
show_magicians(magiciansName);
