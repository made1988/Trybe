    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  const howManyAs = names
    .reduce((acc, name) => acc.concat(name))
    .toUpperCase()
    .split('')
    .filter(item => item === 'A')
    .length;
  return howManyAs;
}

containsA();
assert.deepEqual(containsA(), 20);