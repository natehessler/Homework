// 1.

const pizzaToppings = ['Sausage', 'Pepperoni', 'Onion', 'Peppers',];

// 2.

function greetCustomer() {
  let toppings = '';
  for (let element of pizzaToppings) {
    toppings += element + ' '
  };
  return console.log(`Welcome to Nate's Pizza in St. Louis! The toppings we offer are: ${toppings}`);
};

// 3.

function getPizzaOrder(size,crust,...toppings) {
  let pizzaArray =[size,crust,toppings];
  console.log(`One ${pizzaArray[0]} ${pizzaArray[1]} crust pizza with ${pizzaArray[2]} coming up!`);
  return pizzaArray;
  }

// 4.


function preparePizza(arrayParam){
  let pizzaObject = {
    size: arrayParam[0],
    crust: arrayParam[1],
    toppings: arrayParam[2],
  }
  console.log("Your pizza is cooking now");
  return pizzaObject;
}

/* 5. Create a servePizza function that:
-has a parameter of a pizza Object
-logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x,y,z, ...enjoy!"
-outputs the same pizza Object that was passed in */


function servePizza(objectParam) {
  console.log(`Get it while it's hot! Here's your ${objectParam.size} ${objectParam.crust} crust pizza with ${objectParam.toppings}!`);
  return objectParam;
}

/* 6. Call each function and (starting with preparePizza) use the returned value from the previous function as its input.
No hard-coding necessary in this part. */

greetCustomer();
servePizza(preparePizza(getPizzaOrder('large','thick','Sausage','Pepperoni','Onion','Peppers')));
