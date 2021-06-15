
// Business Logic

function Ticket(age, time, movie) {
  this.age = age;
  this.timeOfDay = time;
  this.movie = movie;
  this.price = 0;
}


Ticket.prototype.calculatePrice = function() {
  let age = this.age
  let time = this.timeOfDay
  let movie = this.movie
  if (age < 12) {
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
  if (movie < 3) {
    this.price -= 2
  } else if (movie >= 3) {
    this.price += 2
  }
  return this.price;
};

// let kidsAge = new Ticket(17, "evening", 3)
// kidsAge.calculatePrice()

// UI logic

$(document).ready(function() {
  $("#movie-form").submit(function(event) {
    event.preventDefault();
    const movieInput = parseInt($("select#movie").val());
    const ageInput = parseInt($("input#age").val());
    const timeOfDayInput = $("select#time-of-day").val();
    
    let newTicket = new Ticket(ageInput, timeOfDayInput, movieInput);
    
    newTicket.calculatePrice(); //calls the function
    console.log(newTicket)
    $("#result").text(`You're ticket price is $${newTicket.price} dollar(s) . Enjoy the show!`)
    // const ticketKeys = Object.keys(newTicket);
    // let newTicketString = "";
    // ticketKeys.forEach(function(key) {
    //   newTicketString = newTicketString.concat(key + ":" + "<li>"+ newTicket[key] + "</li>" );
    // });
    // $("#result").append( newTicketString );

  });
})
