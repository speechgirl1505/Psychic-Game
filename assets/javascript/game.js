// Creates an array that lists out all of the options
//var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];;
var computerChoices = "abcdefghijklmnopqrstuvwxyz";


var wins = 0;
var losses = 0;
var guesses = 9;
var userGuess = " "

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText = document.getElementById("guesses-text");

// Display the user and computer guesses, and wins/losses/ties.
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessText.textContent = "Guesses: " + guesses;

// This function selects a random letter for the computer
function random() {
    var num = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(num);
    return num;
}

//set computer guess
var computerGuess = random();
console.log(computerGuess);

userChoiceText.textContent = "Your Letters: ";

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);

    
    // This logic determines the outcome of the game, and increments the appropriate number
    if ( userGuess === computerGuess) {
        wins++;

        // Reset game when you win
        guesses = 9;
        computerGuess = random();
        guessText.textContent = " ";
        userChoiceText.textContent = "Your Letter: ";
            console.log("reset and guessText is: " + guessText);
    } else {
        userChoiceText.textContent += userGuess;
        
        guesses--;
        guessText.textContent = "Guesses: " + guesses;
        
        // Reset Game when guesses are used up
        if (guesses <= 0 ) {
            losses++;

            //resetting game
            guesses = 9;
            computerGuess = random();
            guessText.textContent = " ";
            userChoiceText.textContent = "Your Letter: ";
            console.log("reset and guessText is: " + guessText);
        }
    }

    // Hide the directions
    directionsText.textContent = "";

    // Display the user and computer guesses, and wins/losses/guesses.
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessText.textContent = "Guesses: " + guesses;
}

