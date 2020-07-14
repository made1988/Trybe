let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggerNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  let newNumber = 0;
  if ( i < (numbers.length - 1)) {
    newNumber = numbers[i] * numbers[i + 1];
    biggerNumbers.push(newNumber);
  } else {
    newNumber = numbers[i] * 2;
    biggerNumbers.push(newNumber);
  }
}

console.log(biggerNumbers);
