// Data Types:

// STRINGS: A collection of characters 
	
	// (Enclose in double or single quotations)

	"What a wonderful world.";
	'Hi guys!';

	// (Use one to protect the use of the other)

	"It's a wonderful day."
	'Jean-Luc Picard said "Make it so."'

	// (If you need to use both, "escape" the job of the mark with a backslash)

	'"Things can\'t get any better," he said.'

	// (console.log can interact with a string with actions)

	console.log('This is a way to print how many characters are in this string' .length )

	console.log('This is a way to manipulate the string into all capital letters.' .toUpperCase())

	console.log(typeof("Amber"));

		// CHALLENGE: Create a string that has your name and use a function to make each character lower case:

		console.log('BrAndoN bAILeY SchAaF' .toLowerCase())

	console.log('this is a way to print a specific character from a string, capitalized.' [0] .toUpperCase());
	
	// (This prints each of the three characters, but with the first one capitalized, this is concatenation)

	console.log('jay' [0] .toUpperCase() + 'jay'[1] + 'jay'[2]);

		// CHALLENGE: Capitalize the 'm' in 'Home' and put the string back together using concatenation:

		console.log('Home' [0] + 'Home' [1] + 'Home' [2] .toUpperCase() + 'Home' [3])


// NUMBERS: A collection of integers

	// These are things that numbers can do:

	console.log(typeof(2)); //number

	console.log(2 + 5); //7

	console.log(10 % 3); //Divides and prints the remainder


// BOOLEANS: True or false values

	/* Here are some Conditional Operators:

		<		Less than
		>		Greater than
		<=		Less than or equal to
		>=		Greater than or equal to
		==		Equal to
		===		Strictly equal to
		!		Not (opposite of what follows)
		!=		Not equal to
		
	*/

	console.log(4 == 5); //false

	console.log("Test".length > "Ego".length); //true

	console.log(1 == "1"); //this is true because 1 and "1" have equal values.

	console.log(1 === "1"); //this is false because although 1 and "1" have equal values but unequal data types.


