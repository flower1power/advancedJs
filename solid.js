"use strict";

//DZ

class Billing {
  #amount = 10;

  calculateTotal(amount) {
    return this.#amount;
  }
}

class FixBilling extends Billing {
  calculateTotal() {
    return super.calculateTotal();
  }
}

class HourBilling extends Billing {
  constructor(hour) {
    super();
    this.hour = hour;
  }

  calculateTotal() {
    return super.calculateTotal() * this.hour;
  }
}

class ItemsBilling extends Billing {
  constructor(items) {
    super();
    this.items = items;
  }

  calculateTotal() {
    return super.calculateTotal() * this.items.length;
  }
}

console.log(new Billing().calculateTotal());
console.log(new FixBilling().calculateTotal());
console.log(new HourBilling(10).calculateTotal());
console.log(new ItemsBilling([1, 2, 3, 4]).calculateTotal());
