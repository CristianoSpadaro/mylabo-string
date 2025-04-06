const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('./src/stringUtils');

// Esempi di utilizzo
console.log(reverseString("hello")); // "olleh"
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(truncateString("Questo è un esempio di stringa", 10)); // "Questo è u..."
console.log(countCharacters("hello")); // { h: 1, e: 1, l: 2, o: 1 }