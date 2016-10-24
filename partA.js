//Forrest Wong

function printPayroll() {
	
	var i = 0;
	var hours = [];
	var weeklyPay = [];
	var totalPay = 0;
	
	document.getElementById("payroll").innerHTML = "";
	
	while (true){
		
		input = prompt("Enter the number of hours employee #" + (i+1) + " worked. Type -1 when done.", "Number of hours");
		if (input === null || input === "-1"){
			break;
		}
		
		if (input < 0 || isNaN(parseInt(input))){
			alert("Number of hours must be a positive integer.");
			continue;
		}else if (input <= 40){
			weeklyPay[i] = input * 15;
		}else {
			weeklyPay[i] = (40*15) + (input - 40)*22.5;	//22.5 = 15 * 1.5
		}
		
		hours[i] = parseInt(input);		
		i++;
	}
	
	document.getElementById("payroll").innerHTML += "<tr><th>Employee #</th><th>Hours worked</th><th>Weekly Pay</th></tr>";
	
	for (i = 0; i < hours.length; i++){
		document.getElementById("payroll").innerHTML += "<tr><td>" + (i+1) + "</td><td>" + hours[i] + "</td><td>$" + weeklyPay[i] + "</td></tr>";
		totalPay += weeklyPay[i];
	}
	
	document.getElementById("totalPay").innerHTML = "Total pay for all employees this week is: $" + totalPay;
	
}