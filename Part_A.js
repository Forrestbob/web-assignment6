
function payrollFunction() {

    var employee;
    var totalEmployees = [];
    var payPerHour = [];
    var hoursLogged = [];
    var done = false;

    document.getElementById("table").innerHTML = ""; 

	while(!done){ 

		employee = prompt("Enter employee name (Type '-1' to exit program): ","Employee's name here");

		if (employee == null) {

			return

		}

		else if (employee == -1) {

			done = false;

		} else {

			done = true;	

		}
	}

    totalEmployees[0] = employee;
    hoursLogged[0] = prompt("Please enter " + totalEmployees[0] + "'s total number of hours worked: ");

    if(hoursLogged[0] == null) {

        return;

    } 
    
    if(hoursLogged[0] > 40){ 

        payPerHour[0] = (40 * 15) + ((payPerHour[0] - 40) * (15 * 1.5));

    } else { 

        payPerHour[0] = hoursLogged[0] * 15;

    }

    var i = 1;
	while(done) {
		
		employee = prompt("Enter employee name. To quit enter -1","Employee's name here");

		if (employee == null) {

			return	

		} if (employee == -1) {

			break

		} else {

			totalEmployees[i] = employee;
			hoursLogged[i] = prompt("Enter " + totalEmployees[i] + "'s hours worked.");

			if (hoursLogged[i] == null) {

				return

			} if (hoursLogged[i] > 40) {

				payPerHour[i] = (40 * 15) + ((hoursLogged[i] - 40) * (15 * 1.5));

			} else {

				payPerHour[i] = hoursLogged[i] * 15;

			}

		}

		i++;
	}

    var length = totalEmployees.length;
	
	document.getElementById("table").innerHTML += "<tr><th>#&nbsp&nbsp</th><th>Employee Name&nbsp&nbsp</th><th>Total Hours&nbsp&nbsp</th><th>Total Pay&nbsp&nbsp</th></tr>";
	for (var i = 0, j = 1; i < length; i++, j++){
		
    document.getElementById("table").innerHTML += "<tr><td>" + j + "</td><td>" + totalEmployees[i] +"</td><td>" + hoursLogged[i] + "</td><td>$" + payPerHour[i] + "</td></tr>";	}



}