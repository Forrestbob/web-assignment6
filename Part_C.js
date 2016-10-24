//      NAME: Lawrence Chen      
//      ASSIGNMENT: HW #6        
//      DUE:  7/20/2016 @ 2pm    
//      PROF: Louis Henry        
//      CLASS: CSC 4370          
//      3 PARTS:  PART C   

// Helpful resources:
// Majority of the code was pulled from https://www.developphp.com/video/JavaScript/Memory-Game-Programming-Tutorial
// and http://stackoverflow.com/questions/24218770/javascript-array-of-images-memory-board-game
// This was an online tutorial that really helped me in my efforts to get what I could do done


var timerCount = 0;
var timerStart  = null;
 
// --- TIMER FUNCTION ---

function timerFunction() {

	if(timerCount) {

		clearTimeout(timerCount);
		clockID = 0;

	}

	if(!timerStart) {

		timerStart = new Date();

	}

	var timeEnd = new Date();

	var timeDifference = timeEnd.getTime() - timerStart.getTime();
	timeEnd.setTime(timeDifference);

	var minutesPassed = timeEnd.getMinutes();

	if(minutesPassed < 10) { 

		minutesPassed = "0" + minutesPassed;

	}

	var secondsPassed = timeEnd.getSeconds();

	if(secondsPassed < 10) {

		secondsPassed = "0" + secondsPassed;

	}

	document.clock_timer.timetextarea.value = minutesPassed + ":" + secondsPassed;
	timerCount = setTimeout("timerFunction()", 1000);

}
 
// --- START FUNCTION ---

function startGame() {

	if(!timerCount) {

	timerStart = new Date();
	document.clock_timer.timeArea.value = "00:00";

	timerCount  = setTimeout("timerFunction()", 1000);

	} else {

	var timeEnd = new Date();

		var timeDifference = timeEnd.getTime() - timerStart.getTime();
		timeEnd.setTime(timeDifference);

		var minutesPassed = timeEnd.getMinutes();

		if(minutesPassed < 10) {

			minutesPassed = "0" + minutesPassed;

		}

		var secondsPassed = timeEnd.getSeconds();

		if(secondsPassed < 10) {

			secondsPassed = "0" + secondsPassed;

		}

		var millisecondsPassed = timeEnd.getMilliseconds();

		if(millisecondsPassed < 10) {

			millisecondsPassed = "00" + millisecondsPassed;

		} else if(millisecondsPassed < 100) {

			millisecondsPassed = "0" + millisecondsPassed;

		}

	}

}
 
// --- STOP FUNCTION --- 

function stopGame() {

	if(timerCount) {

		clearTimeout(timerCount);
		timerCount  = 0;

		var timeEnd = new Date();
		var timeDifference = timeEnd.getTime() - timerStart.getTime();

		timeEnd.setTime(timeDifference);
		var minutesPassed = timeEnd.getMinutes();

		if(minutesPassed < 10) {

			minutesPassed = "0" + minutesPassed;

		}

		var secondsPassed = timeEnd.getSeconds();

		if(secondsPassed < 10) {

			secondsPassed = "0" + secondsPassed;

		}

		var millisecondsPassed = timeEnd.getMilliseconds();

		if(millisecondsPassed < 10) {

			millisecondsPassed = "00" + millisecondsPassed;

		} else if(millisecondsPassed < 100) {

			millisecondsPassed = "0" + millisecondsPassed;

		}

		document.clock_timer.timeArea.value = minutesPassed + ":" + secondsPassed + "." + millisecondsPassed;

	}

	timerStart = null;

}

var memory_array;


// --- numOfPictures NUMBER OF PICTURES FUNCTION ---
function numOfPictures(val) {

	var value = val;

	if (value == 12) {

		 memory_array =	['A','A','B','B','C','C','D','D','E','E','F','F']

	}

	if (value == 18) {

		 memory_array =	['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I']

	}

	if (value == 24) {

		 memory_array =	['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];

	}		
}

var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

// --- MIX UP ARRAY FUNCTION ---

Array.prototype.memory_tile_shuffle = function() {

    var i = this.length, j, temp;

    while(--i > 0) {

        j = Math.floor(Math.random() * ( i + 1 ));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;

    }
    
}

// --- SHOW BORED TEMPORARILY FUNCTION ---
function newBoard(val) {

	var time = val;
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();

	
	for(var i = 0; i < memory_array.length; i++) {

	    output += '<div id="tile_' + i + '" style="background:#FFF">' + memory_array[i] + ' </div>';
	
	}
	
	document.getElementById('memory_board').innerHTML = output;

	if (time == 3) {

	    setTimeout(hideAgain, 3000);
	    setTimeout(startGame, 3000);

	}
	
		
	if (time == 5) {

	    setTimeout(hideAgain, 5000);
	    setTimeout(startGame, 5000);

	}
		
	if (time == 8) {

	    setTimeout(hideAgain, 8000);
	    setTimeout(startGame, 3000);

	}
	
	
}

// --- HIDE FUNCTION ---
function hideAgain(){

	tiles_flipped = 0;
	var output = '';
	
	for(var i = 0; i < memory_array.length; i++) {

		output += '<div id="tile_' + i + '" onclick = "memoryFlipTile(this,\'' + memory_array[i] + '\')"></div>';
	
	}
	
	document.getElementById('memory_board').innerHTML = output;
	



}

//Function that Checks the two flips and either stay the same or change
function memoryFlipTile(tile, val) {

	if(tile.innerHTML == "" && memory_values.length < 2) {

		tile.style.background = '#FFF';
		tile.innerHTML = val;

		if(memory_values.length == 0) {

			memory_values.push(val);
			memory_tile_ids.push(tile.id);

		} else if(memory_values.length == 1) {

			memory_values.push(val);
			memory_tile_ids.push(tile.id);

			if(memory_values[0] == memory_values[1]) {

				tiles_flipped += 2;

				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];

				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length) {

					stopGame();
					alert("Congratulations! It took you "+ minutesPassed + ":" + secondsPassed + ".");
					
				}

			} else {

				function turnOver() {

				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(tile.jpg) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(tile.jpg) no-repeat';
            	    tile_2.innerHTML = "";

				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];

				}

				setTimeout(turnOver, 700);
			}

		}

	}

}

