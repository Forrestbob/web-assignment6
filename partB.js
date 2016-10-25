
function guessingGame(){
	rand = Math.floor((Math.random() * 100) + 1);
	document.getElementById("random").innerHTML = rand + "<br>";
	document.getElementById("random").innerHTML += document.getElementById("guess").value;
}