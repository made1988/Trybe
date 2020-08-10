function longestWord(str) {
  const words = str.split(' ');
  let biggest = words[0];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > biggest.length) {
      biggest = words[i];
    }
  }
  return biggest;
}
