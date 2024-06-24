//Question 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in 
//lowercase uppercase, and titlecase.

let Name: string = 'Arisha';
//lowerCase
console.log(Name.toLowerCase());

//upperCase
console.log(Name.toUpperCase());

//titleCase
console.log(Name.replace(/\b\w/g,c=> c.toUpperCase()));

