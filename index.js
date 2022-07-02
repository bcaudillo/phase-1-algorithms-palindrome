function reverseWord(word){
  let newWord = word.split("")
  let reverseWord = newWord.reverse()
  let reversedWord = reverseWord.join("")
  return reversedWord
}

function isPalindrome(word) {
  
  const reversedWord = reverseWord(word)

  if (word === reversedWord){
    return true}
  else{
    return false
  }
  // Write your algorithm here
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
