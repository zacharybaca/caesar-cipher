const readline = require('readline-sync');

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readline.question('How many letters would you like to shift? '));

// Array That Will Hold Letters of Encrypted Phrase
let encryptedPhrase = [];

// Function That is Responsible for Encrypting a Supplied Phrase
function encrypt() {
    // Split Provided Phrase To Turn Into Array
    let phrase = input.split("");
    let encryptedLetter;
    
    // Loop Through Formatted Phrase
    for (let i = 0; i < phrase.length; i++) {
        // Check If "i" is Anything Else But a Letter
        if (alphabet.includes(phrase[i])) {
            // Assign encryptedLetterIndex the index in alphabet array + the value of shift
            let encryptedLetterIndex = alphabet.findIndex((letter) => letter === phrase[i]) + shift
            // If encryptedLetterIndex is Greater Than 26
            // Subtract 26 From encryptedLetterIndex
            // Assign encryptedLetter The Value Where encryptedLetterIndex is In alphabet Array
            if (encryptedLetterIndex > 26) {
                encryptedLetterIndex = encryptedLetterIndex - 26;
                encryptedLetter = alphabet[encryptedLetterIndex];
            }
            // If encryptedLetterIndex is Less Than 26
            // Assign encryptedLetter The Value of Where encryptedLetterIndex is in The alphabet Array
            else {
                encryptedLetter = alphabet[encryptedLetterIndex];
            }
            // Add Value of encryptedLetter to encryptedPhrase Array
            encryptedPhrase.push(encryptedLetter);
        }
        // If Index in Phrase Doesn't Contain a Letter
        // Add The Given Value to The encryptedPhrase Array
        else {
            encryptedPhrase.push(phrase[i]);
        }
    }
    // Join encryptedPhrase to Create a Phrase That is Encrypted
    return encryptedPhrase.join("");
}

console.log('Encrypted Phrase: ', encrypt());