//      NAME: Lawrence Chen      
//      ASSIGNMENT: HW #6        
//      DUE:  7/20/2016 @ 2pm    
//      PROF: Louis Henry        
//      CLASS: CSC 4370          
//      3 PARTS:  PART B         


// Initialized Variables 
var randomNum = 0;

var defaultTries = 10;

var remaining = 10;

var spree = 0;

function startGame() {

    // Number between 0 - 100 
    rand = Math.floor(Math.random() * 101);

    document.getElementById('tries').innerHTML = "You have " + defaultTries + " guesses remaining.";
    document.getElementById('spree').innerHTML = "You have won " + spree + " game(s) in a row!";

}

function cold_or_hot() {

    // Could've used a switch statement as well, but I've done this before with if/else. Oh well
     
    // Gets the user's inputted value 
    var userInput = new Number(document.getElementById('number').value);

    if(userInput == rand) {

        alert("Congrats! You are a winner! You guessed the number " + rand + ". \n Let's play again! Starting game over now . . .");

        remaining = defaultTries;

        spree += 1;

        if(spree > 3){

            document.getElementById('rank').innerHTML = "Your rank: Newbie Guesser";

        } else if(spree > 6){

            document.getElementById('rank').innerHTML = "Your rank: Amateur Guesser";

        } else if(spree > 9){

            document.getElementById('rank').innerHTML = "Your rank: Go play something else . . .";

        }

        startGame();

    } else if(userInput > rand) {

        alert("Your guess was too high. Try lower.");
        remaining = remaining - 1;
        document.getElementById('tries').innerHTML = "You have " + remaining + " guesses remaining."

    } else if(userInput < rand) {

        alert("Your guess was too low. Try higher.");
        remaining = remaining - 1;
        document.getElementById('tries').innerHTML = "You have " + remaining + " guesses remaining."

    } 

    if(remaining == 0){

        alert("Sorry. You have " + remaining + " guesses remaining. You couldn't guess the random number. :( \n Let's play again! Starting game over now . . .");
        remaining = defaultTries;
        spree = 0;
        startGame();

    }

}