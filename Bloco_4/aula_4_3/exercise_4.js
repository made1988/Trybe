let n = 5;
let asterisc = "*";
let space = " ";
let line = "";

for (let i = 0; i < ((n + 1) / 2); i += 1) {
  line = "";
  for (let j = ((n - 1) / 2); j > i; j -= 1) {
    line += space;
  }
  for (let k = 0; k < ((2 * i) + 1); k += 1) {
    line += asterisc;
  }
  console.log(line);
}
