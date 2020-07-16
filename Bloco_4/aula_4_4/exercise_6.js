function verifyPalindrome(word) {
  let isAPalindrome = true;
  for (let i in word) {
    if (word[i] !== word[(word.length - 1) - i]) {
      isAPalindrome = false;
    }
  }
  return isAPalindrome;
}
console.log(verifyPalindrome("arara"));