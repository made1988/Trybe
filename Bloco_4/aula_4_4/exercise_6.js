function verifyPalindrome(word) {
  let isAPalindrome = true;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] !== word[word.length - (1 + i)]) {
      isAPalindrome = false;
    }
  }
  return isAPalindrome;
}
console.log(verifyPalindrome("arara"));
