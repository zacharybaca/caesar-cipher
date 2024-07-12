const readline = require('readline-sync');

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readline.question('How many letters would you like to shift? '));

let encryptedPhrase = [];

function encrypt() {
    let phrase = input.split("");
    
    // Loop Through Formatted Phrase
    for (let i = 0; i < phrase.length; i++) {
        // Check If "i" is Anything Else But a Letter
        if (alphabet.includes(phrase[i])) {
            let encryptedLetter = alphabet.findIndex((letter) => letter === phrase[i]) + shift
            console.log(encryptedLetter);
        }
    }
}

encrypt();