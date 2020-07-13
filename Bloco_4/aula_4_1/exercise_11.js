let salarioBruto = 6000.88;
let salarioBase = 0;
let salarioLiquido = 0;

let aliquotaINSS = 0;
let aliquotaIR = 0;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = 0.08 * salarioBruto;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = 0.09 * salarioBruto;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = 0.11 * salarioBruto;
} else {
  aliquotaINSS = 570.88;
}

salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (0.075 * salarioBase) - 142.8;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = (0.15 * salarioBase) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (0.225 * salarioBase) - 636.13;
} else {
  aliquotaIR = (0.275 * salarioBase) - 869.36;
}

salarioLiquido = salarioBase - aliquotaIR;

console.log(salarioLiquido);
