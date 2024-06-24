//Question 46
//Enhanced Laptop Object:


let laptop={
    make:"HP",
    model:"Elite book",
    year:"2020",
    describe:function () {
        console.log(`This laptop is ${this.year} ${this.make} ${this.model}`);
        
    }
}
laptop.describe()