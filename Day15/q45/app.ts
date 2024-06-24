//Question 45
//Cars


function make_car(
    manufacturer: string,
    model: string,
    ...options: [string, any][]
  ) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => (car[key] = value));
    return car;
  }
  
  console.log(make_car("Toyota", "Carolla", ["color", "black"],
  ["year", 2022]));
  
  console.log(make_car("toyota", "2022", ["color", "blue"],
  ["sunroof", true]));
  
                