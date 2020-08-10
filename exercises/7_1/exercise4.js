const templateString = "Hi! I'm x!";

function replaceX(str) {
  let letters = templateString.split('');
  let newStr = '';

  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i] !== 'x') {
      newStr += `${letters[i]}`;
    } else {
      newStr += `${str}`;
    }
  }

  return newStr;
}
