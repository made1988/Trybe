let n = 5;
let asterisc = "*";
let line = "";

for (let i = 0; i < n; i += 1) {
  line = "";
  for (let j = (n - 1); j > i; j -= 1) {
    line += " ";
  }
  for (let k = 0; k <= i; k += 1) {
    line += asterisc;
  }
  console.log(line);
}
