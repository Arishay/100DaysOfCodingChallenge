//Question 38
//cities:

//write a function
function describeCity(cityName:string , countryName:string = "Pakistan"){
    console.log(`${cityName} is in ${countryName}`);// it will print a simple message
}
describeCity("Karachi");
describeCity("Islamabad");
describeCity("Toronto" ,"Canada");