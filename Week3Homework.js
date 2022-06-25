// #1

const pizzaToppings = [' sausage', ' pepperoni', ' onion', ' bacon '];


// #2

function greetCustomer() {
  console.log("Thank you for coming to Nate's Pizza! See here for our topping options:")
}
greetCustomer();

for (let topping of pizzaToppings) {
  console.log(topping);
 }

// #3

let pizzaSize = 'Medium';
let pizzaCrust = 'Hand Tossed';
let repeatOrder;

function getPizzaOrder(){

  repeatOrder = `One ${pizzaSize} ${pizzaCrust} pizza with`;
  return repeatOrder;
}

getPizzaOrder();
console.log(repeatOrder + pizzaToppings + "coming in just a moment!");


// #4

function preparePizza = [pizzaSize, pizzaCrust, pizzaToppings] {
  console.log("Preparing pizza with" + preparePizza)
}

// #5

function servePizza()

// #6

// An example output for this assignment is:
// Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers,
// One large thin crust pizza with sausage, onions, peppers, .
// Coming up! ...your pizza is cooking... Order up!
// Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!
