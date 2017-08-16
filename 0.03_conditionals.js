//CONDITIONALS

/*

	Chaining conditional operators
	------------------------------
	&&
	//


*/

var name = "brandon"

if ("Brandon" == name) {
	console.log("Hey! Your name is " + name +".")
} else {
	console.log("What's your name?")

}

/*

	CHALLENGE: Create an if statement that checks if the 
	name's first character is lowercase. If it is, 
	rebuild the name with the first letter capitalized.

*/




if (name[0] != name[0].toUpperCase()) {
	name = name[0].toUpperCase() + name[1]+name[2]+name[3]+name[4]+name[5]+name[6]
	console.log("Your name should be capitalized. I did it for you: " + name)
} else {
	console.log("Your name is already capitalized.")
}




var age = 17

if (age >= 25) {
	console.log("Congratulations! You can rent a car!")
}	else if (age >= 21) {
	console.log("Congratulations! You can purchase alcohol!")
}	else if (age >=18) {
	console.log("Congratulations! You can vote!")
}	else {
	console.log("Sorry. You're not old enough to participate in the voting process, the sales of liquor, or the renting of a car.")
}


