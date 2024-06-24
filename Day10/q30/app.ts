//Question 30
//Hello Admin:

let userNames:string[] = ["Admin","Arisha","Ali","Aliza","Shifa"]

userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
        
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
        
    }
});