let a = 1002;
let b = 1002;
let c = 998;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
} else {
  console.log("There is not a single biggest number")
}