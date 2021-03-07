
console.log(" hang game");
// ************** Global variables *****************

let gameWords = ["manger", "tomate", "variable", "jeu", "pendu"];
let guessWords = ["------", "------", "--------", "---", "----"];

// ************** Function ******************
function generateWord() {
    let choiceWord = Math.floor(Math.random() * Math.floor(guessWords.length));
    return guessWords[choiceWord];
}


// ***************** code logic ******************

alert("Welcome to HANGMAN GAME :)");
let randomChoice = generateWord();
prompt("Word to find is : " + randomChoice + " Enter one letter");