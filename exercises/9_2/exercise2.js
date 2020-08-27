const randomNumber = () => Math.floor(Math.random() * 51);

const makeArray = size => {
  const array = [];
  for (let index = 0; index < size; index += 1) {
    array.push(randomNumber());
  }
  return array;
}

const promise = new Promise ((resolve, reject) => {
  const workingArray = makeArray(10);
  const conditionArray = workingArray.map(value => value ** 2).reduce((acc, current) => acc + current);
  if (conditionArray < 8000) {
    return resolve(console.log('Resolvida'));
  }
  reject(new Error('Rejeitada'));
})