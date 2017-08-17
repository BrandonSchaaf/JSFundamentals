//FUNCTIONS

function greeting() {
	console.log("Good Morning!")
}

//Parenthesis invokes the function to run the code inside of it.

greeting();

	//CHALLENGE: Create a function with a string and call it.

function dayFour() {
	console.log("Day four... Feeling great! Getting good sleep helps.")
}

dayFour();

function greeting2(name, age, height){
	console.log("Time to start coding, " + name + age + height);
}

greeting2("Jay ",32, " 5'9") //Time to start coding, Jay 32 5'9


function sum(num1, num2){
	console.log(num1 + num2)
}

sum(3, 4) //7

	var fName = "Brandon"

	function hello(){
		console.log(fName) //This is calling to the var outside the function.
	}

	hello();//So it prints Brandon


	function hello2(fName){
		console.log(fName) //This is calling to the placeholder in the function's parameters.
	}

	hello2();//So it prints undefined, because there's nothing in the parenthesis after the calling of the function.


	function hello3(fName){
		lname = "Schaaf"
		console.log(fName + " " + lname)
}

//console.log(lname) //If you don't include "var" in the function, JS hoists the var by adding var = lname on a global scale.

hello3("AJ")// This prints AJ Schaaf. The parenthesis are for customization.

	if (1 == 1){
		var sum = 1 + 1
		console.log(sum)
	}

	console.log(sum)//2, two times


	// 	if (1 == 1){
	// 	let sum = 1 + 1 //var creates a new box every time. let can automatically replace the items inside.
	// 	console.log(sum2)
	// }

	//console.log(sum2)//undefined


//var in a function, stays in function.
//var in an if, can be accessed from outside.
//let in a function, stays in a function.
//let in an if, stays in an if.

//Function creates a system. With a function, for example: you can pass in a name and it automatically capitalizes the first letter.

//CHALLENGE: Create a function called capitalize() and use the for loop we created yesterday to capitalize names.


function capitalize(name){
	
	var capitalized = ''

	for (var letter in name) {
		if(letter == 0) {
			capitalized += name[letter].toUpperCase()
		} else {
			capitalized += name[letter]
		}
	}

	return capitalized
}

console.log(capitalize("brandon"))

//SCOPE


//VOID FUNCTIONS


//FUNCTIONS WITH PARAMETERS