var pizza = {
  crustType: "cracker crust",
  sauceType: "tomato sauce",
  cheeses: ["mozzarella cheese"],
  toppings: ["toppings"],
};

function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
console.log(pizza1);

var pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(pizza2);

var pizza3 = pizzaOven(
  "cracker crust",
  "tomato sauce",
  ["mozzarella"],
  ["pepperoni", "ham"]
);
console.log(pizza3);

var pizza4 = pizzaOven(
  "thin crust",
  "barbecue sauce",
  ["parmisan"],
  ["pepperoni", "chickeen"]
);
console.log(pizza4);

function randomPizza(pizza1, pizza2, pizza3, pizza4) {
  var pizzaArray = [pizza1, pizza2, pizza3, pizza4];
  return pizzaArray[parseInt(Math.random() * 4)];
}
console.log(randomPizza(pizza1, pizza2, pizza3, pizza4));
