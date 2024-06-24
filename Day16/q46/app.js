//Question 46
//Enhanced Laptop Object:
var laptop = {
    make: "HP",
    model: "Elite book",
    year: "2020",
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model));
    }
};
laptop.describe();
