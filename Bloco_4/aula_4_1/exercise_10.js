let cost = 28.88;
let saleValue = 33.99;
let profitUnit = saleValue - (1.2 * cost);
if (cost < 0 || saleValue < 0) {
  console.log("Error, an invalid value for real life money has been stated");
} else {
  console.log(1000 * profitUnit);
}