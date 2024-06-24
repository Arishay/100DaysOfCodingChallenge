//Question 48
//Combining Arrays with Spread Operator:

let price1 = [15000,5000,30000]
let price2 = [20000,55000,40000]

let combinePrice = [...price1 , ...price2 ].sort((first , second)=> first - second);
console.log(combinePrice);
