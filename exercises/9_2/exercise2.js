const randomNumber = () => Math.floor(Math.random() * 51);

const makeArray = size => {
  const array = [];
  for (let index = 0; index < size; index += 1) {
    array.push(randomNumber());
  }
  return array;
}

const sumPromise = new Promise((resolve, reject) => {

})

const promise = new Promise ((resolve, reject) => {
  const workingArray = makeArray(10);
  const conditionNumber = workingArray.map(value => value ** 2).reduce((acc, current) => acc + current);
  if (conditionNumber < 8000) {
    const divisionArray = [2, 3, 5, 10];
    const resultArray = divisionArray.map(divisor => conditionNumber / divisor);
    resolve(resultArray);
  } else {
    reject(new Error('É mais de oito mil! Essa promise deve estar quebrada!'));
  }
})
.then(result => console.log(result))
.catch(err => console.log(err));
