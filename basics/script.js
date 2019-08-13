// /*********************
// * Variables and data types
// */


// var firstName = 'john';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;
// console.log('lastName')

// var fullAge = true;
// console.log(fullAge);


// var _3years = 3;
// var johnMark = 'John and Mark';


// /*************************
// * Variable mutation and type coerction
// */

// var firstName = 'John';
// var age = 28;
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + ' . Is he married? ' + isMarried);


// // Variable mutation

// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + ' . Is he married? ' + isMarried);




// var lastName = prompt('what is his last Name?');
// console.log(firstName + '' + lastName);

// /***************************
// * Operator precedence
// */

// // var now = 2019;
// // var yearJohn = 1989;
// // var fullAge  = 18;

// // var isFullAge = now - yearJohn >= fullAge;

// // console.log(isFullAge);

// // var ageJhon = now  - yearJohn;
// // var ageMark = 35;
// // var average = (ageJhon + ageMark) / 2;
// // console.log(average);


// var year, yearJohn, yearMark;
// now = 2019;
// ageJhon = 28;
// ageMark = 33;

// ageJhon =  now - ageJhon;
// yeahMark = now - ageMark;



// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// // Logical operators

// var johnOlder = ageJhon < ageMark;
// console.log(johnOlder)

// // typeof opearator
// console.log(typeof johnOlder);









// /******************************
// * Operator precendence
// */

// var now = 2019;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);




// /**********************
// * Coding challenge 1
// */


// /*
// Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass (mass * height).
// (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in varibles
// 2. Calculate a boolean containing information about whether Mark has a higher BMI than john.
// 3. Calculate both their BMIs
// 4 . Print a string to the console containg variables from step 3. (Something lime "Is Marks BMI higher than Johns? true").
// */

// var massMark = 78;
// var heightMark = 1.69;

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
// var markHigherBMI = BMIMark > BMIJohn;

// console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBMI);

/*****************************
If / else statements
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if ( civilStatus === 'married') {
// 	console.log(firstName + 'is married!');
// } else {
// 	console.log(firstName + 'will hopefully marry soon:)');
// }


// var isMarried = true;

// if (isMarried) {
// 	console.log(firstName + 'is married!');
// } else {
// 	console.log(firstName + 'will hopefully marry soon:)');
// }


/***************************
* Boolean Logic
*/

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
// 	console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
// 	console.log(firstName + ' is a teenager,');
// } else if (age > 20 && age < 30) {
// 	console.log(firstName + ' is young man.')
// } else {
// 	console.log(firstName + ' is a man.');
// }
//


/***********************
* The Ternarry Operator and Swicth Statements
*/

// var firstName = 'john';
// var age = 14;

// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// /* if (age >= 18) {
// 	var drink = 'beer';
// } else {
// 	var drink = 'juice';
// }

// */



// // Switch statement

// var job = 'teacher';
// switch (job) {
// 	case 'teacher':
// 	console.log(firstName + ' teaches kids how to code.');
// 	break;
// 	case 'driver':
// 	console.log(firstName + ' drives an uber in Libson.');
// 	break;
// 	case 'designer':
// 	console.log(firstName + ' designs beautiful websites.');
// 	break;
// 	default:
// 	console.log(firstName + ' does Something else.');
// }


/************************
* Trusthy and Falsy values anf equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;

// if (height) {
// 	console.log('Variable is defined');
// } else {
// 	console.log('Variable has NOT been defined');
// }


// // Equality operators
// if (height === '23') {
//     console.log('The == operator does type coercion!');
// }




/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/



// var scoreJohn = (89 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// var scoreMary = ( 97 + 134 + 105) / 3;
// console.log(scoreJohn, scoreMike, scoreMary)


// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//     console.log('Mary\'s team wins with ' + scoreMary + ' points');
// } else {
//     console.log('There is a draw');
// }
// if (scoreJohn > scoreMike) {
//     console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//     console.log('There is a draw');
// }




// if (scoreJohn > scoreJohn) {
// 	console.log('John\'s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
// 	console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
// 	console.log('There is a draw');
// }




/***************************
* Functions
*/


// function calculateAge(birthYear) {
// 	return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);


// function yearsUntilRetirement(year, firstName) {
// 	var age = calculateAge(year);
// 	var retirement = 65 - age;


// 	if (retirement > 0) {
// 		console.log(firstName + ' retires in ' + retirement + 'years.');
// 	} else {
// 		console.log(firstName + ' is already retired.')
// 	}
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');



/***************************
* Function Statements and Experssions
*/


// var whatDoYouDo = function(job, firstName) {
// 	switch(job) {
// 		case 'teacher':
// 		  return firstName + ' teaches kids how to code';

// 		case 'driver':
//           return firstName + ' drives a cab in Lisbon';
// 		case 'designer':
//           return firstName + ' designs beautiful websites.';
// 		default:
// 		  return firstName + ' does Something';
// 	}
// }


// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));








/*************************88
* Arrays
*/


// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
// console.log(names[0]);
// console.log(name.length);
//
// // Mutate array data
//
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);




/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }
// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];
// var finalValues = [bills[0] + tips[0],
//                    bills[1] + tips[1],
//                    bills[2] + tips[2]];
// console.log(tips, finalValues);





 //Different data types

// var john = ['John', 'Smith', 1990, 'designer', false];
// john.push('blue');
// john.unshift('Mr.');
// console.log(john);
// john.pop();
// john.pop();
// john.shift();
// console.log(john);
// console.log(john.indexOf(23));
// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);

/***********************************
*Objesctes and properties
*/


// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: 'teacher',
// 	isMarried: false
//
// }
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);
//
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
//
// // new object syntax
//
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);








/*******************
*Objects and methods
*/




// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: 'teacher',
// 	isMarried: false,
// 	calcAge: function() {
// 		this.age = 2018 - this.birthYear;
// 	}
// };
// john.calcAge();
// console.log(john);


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/


// var john = {
// 	fullName: 'John Smith',
// 	mass: 92,
// 	height: 1.95,
// 	calcBmi: function() {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	}
// }
//
//
// var mark = {
// 	fullName: 'mark Miller',
// 	mass: 78,
// 	height: 1.69,
// 	calcBmi: function() {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	}
// }
//
//
//
// // john.calcBmi();
// // mark.calcBmi();
// // console.log(john, mark);
//
//
//
// if (john.calcBmi() > mark.calcBmi()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('They have the same BMI');
// }


/****************************
*Loops and iteration
*/

//
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// }



// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++) {
// 	console.log(john[i]);
// }
//
//
//
//
// var i = 0
// while (i < john.length) {
// 	   console.log(john[i]);
// 		 i++;
// }


// continue and beak Statements






/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/




var john = {
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	calcTips: function () {
		this.tips = [];
		this.finalValues = [];
		for (var i = 0; i < this.bills.length; i++)
		{
			var percentage;
      var bill = this.bills[i];
			if (bill < 50) {
				percentage = .2;
			} else if (bill >= 50 && bill < 200) {
				percentage = 1.5;
			} else {
				percentage = .1;
			}
			this.tips[i] = bill * percentage;
			this.finalValues[i] = bill + bill * percentage;
		}
	}
}




var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// Do the calculations
john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);
if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
