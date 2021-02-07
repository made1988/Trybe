let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let compare = 0;

for (let firstIndex = 0; firstIndex < numbers.length; firstIndex += 1) {
  compare = 0;
  for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1){
    if ( numbers[firstIndex] > numbers[secondIndex]) {
      compare += 1;
    }
  }
  if ( compare === 9) {
    console.log(numbers[firstIndex]);
  }
}

