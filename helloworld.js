var students = ['Tristan', 'Josh', 'Bogdan', 'Laz'];

function printMe(thingToPrint){
	console.log(thingToPrint);
}

students.forEach(printMe);

students.push('Keith', 'Will', 'Curtis', 'Joe');

students.forEach(printMe);
