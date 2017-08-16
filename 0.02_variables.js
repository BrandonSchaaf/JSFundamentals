//VARIABLES: Boxes to hold information

	var firstName; //This declares a box

	firstName = "Brandon" //This assigns or reassigns to the box

	console.log(firstName) //"Brandon"
	console.log(typeof(firstName)) //"string"

	var lastName = "Schaaf" //You can declare and assign at the same time

	console.log(firstName.length) //7
	console.log(firstName.toUpperCase()) //BRANDON

		//CHALLENGE: Create 2 variables and concat them together in a third variable called fullName:

	var fullName = firstName + " " + lastName
	console.log(fullName) //Brandon Schaaf

	//To reassign a var that's already been declared, do it like this:

	firstName = "Peter"

	var fullName = firstName + " " + lastName 
	console.log(fullName) //Peter Schaaf

		//BRONZE CHALLENGE:

			var zipcode = "46219"
			var shoes = "2"

			console.log("My zip code is " + (zipcode) + " and I have " + shoes + " pairs of shoes.")

		//SILVER CHALLENGE:

			var myNumber = 0

				console.log(myNumber)

			myNumber = (myNumber + 10) // "myNumber += 10" is shorthand for this same thing

				console.log(myNumber)

			myNumber = (myNumber - 1) // Or "myNumber -= 1"
				
				console.log(myNumber)

			myNumber = (myNumber * 9) // Or "myNumber *= 9"

				console.log(myNumber)

			myNumber = (myNumber / 7) // Or "myNumber /= 7"

				console.log(myNumber)

		//GOLD CHALLENGE:

			var currentAge = 29
			var maxAge = 41
			var sandwichesPerDay = 3
			var sandwichesNeeded = ((maxAge - currentAge) * 365 * 3).toLocaleString()

			console.log("If I'm going to eat " + sandwichesPerDay + " sandwiches per day until I am " + maxAge + " years old, then I will need " + sandwichesNeeded + " sandwiches. Yowza.")



//VARIABLE DATA TYPES




//VARIABLE SCOPES




//