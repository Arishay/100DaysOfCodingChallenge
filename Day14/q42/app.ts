//Question 42
//Great Magicians:

//Make a array of magician’s names
let magiciansName:string[] = ["Aina", "Ayesha", "Hani"]
//Create a function & pass the array in function
function show_magicians(magiciansName:string[]){
        magiciansName.forEach(magicians => {
            console.log(magicians);
            
        });
}

//create make_great function
function make_great(magiciansName: string[]) {
    for (let i = 0; i < magiciansName.length; i++) {
        magiciansName[i] = magiciansName[i] + " the Great";
    }
}

//Call the function
make_great(magiciansName); //original array
show_magicians(magiciansName); // Shows modified names