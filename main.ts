interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log(`The ${this.make} ${this.model} (${this.year}) engine started`);
  }
}

const myCar = new Car("Mitsubishi", "Outlander", 2022);
myCar.start();
