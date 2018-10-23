/*
PSUEDOCODE

InitializeGame
    Create array of Letters
    Select randomLetter from Letters
    Set totalWins to 0
    Set totalLosses to 0
    Set remainingGuesses to 9
    Set lettersGuessedSoFar to null
    
GetUserGuess
    Read value of userGuess
    Compare userGuess to randomLetter
    Add userGuess to lettersGuessedSoFar
        If userGuess === randomLetter Then
            increment totalWins by 1
            ResetGame
        Else

// reset game, but don't overwrite totalWins or totalLosses
ResetGame
    Select randomLetter from Letters
    Set remainingGuesses to 9
    Set lettersGuessedSoFar to null
    
// choose a random letter from the Letters array
GetRandomLetter


*/


// Create an array of letters.
var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Randomly choose a letter from the Letters array.
var randomLetter = Letters[Math.floor(Math.random() * Letters.length)];

// console.log(randomLetter);

// Create variables for all the things
var totalWins = "0";
var totalLosses = 0;
var lettersGuessedSoFar = null;


// Create variables for each of the IDs where we want to display text.
var totalWinsText = document.getElementById("totalWinsText");
var totalLossesText = document.getElementById("totalLossesText");
var remainingGuessesText = document.getElementById("remainingGuessesText");
var lettersGuessedSoFarText = document.getElementById("lettersGuessedSoFarText");

// Just trying to get the value of totalWins written to the totalWinsText ID. Doesn't work.
if ( 1 < 2 ) {
    totalWinsText.textContent = "Total wins: " + totalWins;
}


// 
// totalWinsText.textContent = "Total wins: " + totalWins;
// totalLossesText.textContent = "Total losses: " + totalLosses;
// console.log(totalWins);

// Create a function that accepts the user input and processes their guess.
// document.onkeyup = function (event) {
//   stuff goes here
// };