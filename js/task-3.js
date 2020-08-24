function findLongestWord (string = "") {
    // Write code under this line
    const myArray = string.split(' ')
    let longestWord = ''
    // console.log(myArray)
    for (const word of myArray) {
        // longestWord = myArray[0]
        // console.log(longestWord.length)
        // console.log(word.length)
        if(word.length > longestWord.length) {

            longestWord = word
            // console.log(longestWord)
            // console.log(word)
            // console.log(word.length > longestWord.length)
        }
    }
    return longestWord
  }
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  // 'jumped'
  
  console.log(findLongestWord('Google do a roll'));
  // 'Google'
  
  console.log(findLongestWord('May the force be with you'));
  // 'force'