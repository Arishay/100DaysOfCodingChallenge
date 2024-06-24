//Question 24
//More Conditional Tests:

let transport ="car";
let fruit ="apple";
let num1 = 4;
let num2= 6;

//test 1
console.log("Testing equality and inequality with string");
console.log(transport === "car");//true
console.log(transport=== "Car");//False
//test2
console.log("Testing with lowwer case");
console.log(fruit.toLowerCase() === "apple");//true
console.log(fruit.toLowerCase() === "Apple");//False
//test 3
console.log("Testing with <,>,<=,>= operators");
console.log(num1<num2);//true
console.log(num1>num2 );//False
console.log(num1<=4);//true
console.log(num1>=8 );//False

//test4
console.log("Tests using and and or operators");
console.log(true&&false);//false
console.log(true || false );//true

//test 5
let fruits:string[] = ["apple","mango"];
console.log("Is apple in array:");
console.log(fruits.includes("apple"));//true
//test 6
console.log("Is banana in array:");
console.log(fruits.includes("banana"));//false