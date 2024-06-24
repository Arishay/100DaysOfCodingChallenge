//Question 37
//Large Shirts:

//created function
function make_shirt(size : string="large",message:string = "I love TypeScript."){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

//call the function

make_shirt()//this will print default size and message

make_shirt("small")//changed the size but default message

make_shirt("medium","Coding Lover")//customized the message and size