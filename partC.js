
var pics = ["images/image001.gif","images/image002.gif","images/image003.gif",
			"images/image004.gif","images/image005.gif","images/image006.gif",
			"images/image007.gif","images/image008.gif","images/image009.gif",
			"images/image010.gif","images/image011.gif","images/image012.gif",];
			

function matchingGame(){
	
	var columns, seconds;

	pics.sort(function(a, b){return 0.5 - Math.random()});
	document.getElementById('play').innerHTML = "Start over";
	//console.log(document.getElementById('radio1').checked);
	
	
	if(document.getElementById('radio1').checked){
		columns = 4;
	}else if(document.getElementById('radio2').checked){
		columns = 5;
	}else if(document.getElementById('radio3').checked){
		columns = 6;
	}
	
	
	if(document.getElementById('radio4').checked){
		seconds = 3000; //3 seconds
	}else if(document.getElementById('radio5').checked){
		seconds = 5000;
	}else if(document.getElementById('radio6').checked){
		seconds = 8000;
	}
	
	var k = 1;
	var table = "";
	for(var i = 0; i < 4; i++){
		//document.getElementById('table').innerHTML += "<tr><td>" + (i+1) + "</td></tr>";
		table += "<tr>";
		for(var j = 0; j < columns; j++){
			table += "<td>" + k + "</td>";
			//console.log(k);
			k++;
		}
		table += "</tr>";
	}
	
	document.getElementById('table').innerHTML = table;
	
	setTimeout(function(){ 
	
		var k = 0;
		var table = "";
		for(var i = 0; i < 4; i++){
		//document.getElementById('table').innerHTML += "<tr><td>" + (i+1) + "</td></tr>";
		table += "<tr>";
			for(var j = 0; j < columns; j++){
				table += "<td><img src='" + pics[k] + "'></td>";
				k++;
			}
		table += "</tr>";
		}
		
		document.getElementById('table').innerHTML = table;
		document.getElementById('table').style.fontSize = "0px";
        
    }, seconds);
	
	
	
	
	
}