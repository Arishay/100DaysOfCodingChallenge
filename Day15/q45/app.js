//Question 45
//Cars
// function car(manufacturer:string,modelName: string,...options:[]) {
//     let carObject= {
//         manufacturer: manufacturer,
//         modelName: modelName,
//     } ;
//     //additional options
//     options.forEach(option =>{
//         let [key,value] = option.split(":")
//         carObject[key.trim()]=[value.trim()]
//     })
//     return carObject
// }
// //call the functions
// console.log(car("toyota","corolla","color: black"));
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(make_car("Toyota", "Carolla", ["color", "black"], ["year", 2022]));
console.log(make_car("toyota", "2022", ["color", "blue"], ["sunroof", true]));
