const factorial = num => {
  let result = 1;
  for (let i = num; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

console.log(factorial(6));