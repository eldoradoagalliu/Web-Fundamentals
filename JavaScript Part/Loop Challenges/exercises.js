// Exercise 1
var i = 1;
while (i < 20) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
}

// Exercise 2
for (var i = 100; i > 0; i--) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// Exercise 3
var i = 4;
while (i > -4) {
  console.log(i);
  i -= 1.5;
}

// Exercise 4
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Exercise 5
var product = 1;
for (var i = 1; i <= 12; i++) {
  product *= i;
}
console.log(product);
