"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`The ${this.make} ${this.model} (${this.year}) engine started`);
    }
}
const myCar = new Car("Mitsubishi", "Outlander", 2022);
myCar.start();
