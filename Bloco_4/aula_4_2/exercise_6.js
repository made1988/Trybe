let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 != 0) {
    oddNumbers += 1;
  }
}

if (oddNumbers === 0) {
  console.log("There are no odd numbers in the given array");
} else {
  console.log("There are " + oddNumbers + " odd numbers in the given array");
}

