//Question 33
//Ordinal Numbers:


//Created Array of numbers
let ordinalNumbers:Number[] = [1,2,3,4,5,6,7,8,9];
//created loop
ordinalNumbers.forEach(numbers => {
    let suffix = "th"
    if (numbers === 1) {
        suffix = "st"
    }
    else if (numbers === 2) {
        suffix = "nd"
    }
    else if (numbers === 3) {
        suffix = "rd"
    }
    console.log(`${numbers}${suffix}`)
});