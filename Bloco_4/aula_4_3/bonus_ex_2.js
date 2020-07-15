let n = 778589;
let divisorsCounter = 0;

for (let i = 1; i <= n; i += 1) {
  if (n % i === 0) {
    divisorsCounter += 1;
  }
}

if (divisorsCounter > 2) {
  console.log("O número " + n + " não é primo");
} else {
  console.log("O número " + n + " é primo");
}
