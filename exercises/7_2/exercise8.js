const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function checkKeyValue(obj, key, value) {
  const objectEntries = Object.entries(obj);
  const searchTarget = [ key, value ];
  let result = false;
  
  for (let i = 0; i < objectEntries.length; i += 1) {
    if (objectEntries[i][0] === searchTarget[0] && objectEntries[i][1] === searchTarget[1]) {
      result = true;
    }
  }
  return result;
}

console.log(checkKeyValue(lesson1, 'materia', 'Matemática'));
