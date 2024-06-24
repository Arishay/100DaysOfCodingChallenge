//Question 41
//Magician:

//Make a array of magician’s names
let magiciansName:string[] = ["Aina", "Ayesha", "Hani"]
//Create a function & pass the array in function
function show_magicians(magiciansName:string[]){
        magiciansName.forEach(magicians => {
            console.log(magicians);
            
        });
}
//Call the function
show_magicians(magiciansName);