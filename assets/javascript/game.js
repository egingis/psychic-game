//set variables
var wins = 0;
var losses = 0;
var turnsRemaining = 9;

//array for player guesses
var patheticAttempts = [];

// array for possible guesses
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//start listening for user input
document.onkeyup = function (event) {

    //records the players guess to userGuess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //computer pulls a random letter out of the hat
    var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    //pushes user guess to patheticAttempts array
    patheticAttempts.push(userGuess);

    //ends game and displays victory message if userGuess == compGuess
    if (userGuess == compGuess) {
        //adds to the win counter
        wins++;
        //alerts the player of victor
        alert("how did you know?? you win this time.");
        //reset turns remaining back to 9 to reset the round
        turnsRemaining = 9;
        //resets the pathetic attempts for the next game
        patheticAttempts.length = 0;
    }

    //ends game and displays a defeat message when turnsRemaining hits 0
    else if (turnsRemaining == 0) {
        //adds loss to counter
        losses++;
        //alerts the player of failure
        alert("you've failed! better luck next time");
        //reset turns remaining back to 9 to reset the round
        turnsRemaining = 9
        //resets the pathetic attempts for the next game
        patheticAttempts.length = 0;
    }

    //lowers amount of turns remaining if user guesses incorrectly
    else if (userGuess !== compGuess) {
        turnsRemaining--;
    }

    //updates the html with the results
    var html = "<h1>Psychic Game</h1>" + "<p>Can you guess what letter i'm thinking of silly human?</p>" + "<p>WINS: " + wins + "</p>" + "<p>LOSSES: " + losses + "</p>" + "<p>TURNS REMAINING: " + turnsRemaining + "</p>" + "<p>YOUR PATHETIC ATTEMPTS AT WINNING: " + patheticAttempts + "</p>";
    document.querySelector('#psychicGame').innerHTML = html;
}



