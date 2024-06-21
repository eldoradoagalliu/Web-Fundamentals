// Exercise 1
function alwaysHungry(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      count++;
    }
  }

  if (count != 0) {
    for (var i = 0; i < count; i++) {
      console.log("yummy");
    }
  } else {
    console.log("I'm hungry");
  }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

// Exercise 2
function highPass(arr, cutoff) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// Exercise 3
function betterThanAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > sum / arr.length) {
      count++;
    }
  }
  return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

// Exercise 4
function reverse(arr) {
  for (var i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// Exercise 5
function fibonacciArray(n) {
  var fibArr = [0, 1];
  for (var i = 0; i < n - 2; i++) {
    var sum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    fibArr.push(sum);
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result);
