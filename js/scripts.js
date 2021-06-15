
// Business Logic

function Ticket(age, time) {
  this.age = age;
  this.timeOfDay = time;
  this.price = 0;
}


Ticket.prototype.calculateAgePrice = function() {
  let age = this.age
  let time = this.timeOfDay
  if (age < 12) {
    console.log("inside works!");
    this.price += 10;
  } else if (age >= 12 && age < 65) {
      this.price += 15;
  } else if (age >= 65) {
    this.price += 5;
  }
  if (time === "matinee") {
    this.price -= 2;
  } else if (time === "evening") {
    this.price += 4
  }
  return this.price;
};

// console.log(this.price)
let kidsAge = new Ticket(11, "evening")
kidsAge.calculateAgePrice()

// UI logic


