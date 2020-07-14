let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let avg = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

avg = ( sum / numbers.length );

if ( avg > 20 ) {
  console.log("Average greater than 20");
} else {
  console.log("Average less than or equal to 20")
}
