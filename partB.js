
var triesLeft = 6;
var rand = Math.floor((Math.random() * 100) + 1);

function guessingGame(){

	console.log("random generated number: " + rand);
	console.log("number entered: " + document.getElementById("guess").value);
	console.log("tries left: " + triesLeft);
	
	var guess = document.getElementById("guess").value;
	
	if (isNaN(guess) || guess < 1 || guess > 100){
		alert("Please enter an integer between 1 and 100.");
		return;
	}else if (triesLeft > 0){
		triesLeft--;
		document.getElementById("tries").innerHTML = "(You have " + triesLeft + " tries left.)";
		
		if (guess < rand){
			document.getElementById("out").innerHTML = "Your guess is too low";
		}else if(guess > rand){
			document.getElementById("out").innerHTML = "Your guess is too high";
		}else if(guess == rand){
			document.getElementById("tries").innerHTML = "<br>";
			document.getElementById("out").innerHTML = "WOW! You guessed correctly! The secret number is " + rand + ".";
			document.getElementById("retry").innerHTML = "<input type = 'submit' value = 'Play again?' onclick = 'location.reload();'>";
		}	
	}else{
		console.log("RAN OUT OF TRIES");
		document.getElementById("out").innerHTML = "You ran out of tries! The secret number was " + rand + ". Click the button to play again!";
		document.getElementById("retry").innerHTML = "<input type = 'submit' value = 'Try again' onclick = 'location.reload();'>";
	}
}