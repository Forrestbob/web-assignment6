/*
var pics = ["images/image001.gif","images/image002.gif","images/image003.gif",
			"images/image004.gif","images/image005.gif","images/image006.gif",
			"images/image007.gif","images/image008.gif","images/image009.gif",
			"images/image010.gif","images/image011.gif","images/image012.gif",];
*/			

var pics, columns;

function matchingGame(){
	
	var seconds;

	//pics.sort(function(a, b){return 0.5 - Math.random()});
	document.getElementById('play').innerHTML = "Start over";
	//console.log(document.getElementById('radio1').checked);
	
	
	if(document.getElementById('radio1').checked){
		columns = 4;
		pics = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
		pics.sort(function(a, b){return 0.5 - Math.random()});
	}else if(document.getElementById('radio2').checked){
		columns = 5;
		pics = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
		pics.sort(function(a, b){return 0.5 - Math.random()});
	}else if(document.getElementById('radio3').checked){
		columns = 6;
		pics = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];
		pics.sort(function(a, b){return 0.5 - Math.random()});
	}
	
	
	if(document.getElementById('radio4').checked){
		seconds = 3000; //3 seconds
	}else if(document.getElementById('radio5').checked){
		seconds = 5000;
	}else if(document.getElementById('radio6').checked){
		seconds = 8000;
	}
	
	var k = 0;
	var table = "";
	for(var i = 0; i < 4; i++){
		table += "<tr>";
		for(var j = 0; j < columns; j++){
			table += "<td><img src='images/image" + pics[k] + ".jpg'></td>";
			k++;
		}
		table += "</tr>";
	}
	document.getElementById('table').style.fontSize = "0px";
	
	document.getElementById('table').innerHTML = table;
	
	setTimeout(function(){ 
		var k = 1;
		var table = "";
		for(var i = 0; i < 4; i++){
			table += "<tr>";
			for(var j = 0; j < columns; j++){
				table += "<td onclick='reveal(" + k +");'>" + k + "</td>";
				console.log(k);
				k++;
			}
			table += "</tr>";
		}
		
		document.getElementById('table').innerHTML = table;
		document.getElementById('table').style.fontSize = "80px";
        
    }, seconds);
	
}

function reveal(image){
	/*
	console.log(image);
	var k = 1;
	var table = "";
	for(var i = 0; i < 4; i++){
		table += "<tr>";
		for(var j = 0; j < columns; j++){
			table += "<td><img src='images/image" + pics[k] + ".jpg'></td>";
			console.log(k);
			k++;
		}
		table += "</tr>";
	}
		
		document.getElementById('table').innerHTML = table;
		*/
}