"use strict";

class Car {
  #brand;
  #model;
  #_mileage;
  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.setMileage = mileage;
  }

  get getMileage() {
    return this.#_mileage;
  }

  set setMileage(newMileage) {
    if(this.#_mileage > newMileage) {
      return console.log('Скручивать не хорошо')
    }
    this.#_mileage = newMileage;
  }

  info() {
    console.log(this.#brand, this.#model, this.getMileage);
  }
}

const BMW = new Car("BMW", "X5", 3000);
console.log(BMW);
console.log(BMW.getMileage);
BMW.info();
BMW.setMileage = 5000;
BMW.info();
