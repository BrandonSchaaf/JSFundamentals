// LOOPS

/*

	LCV = Loop Control Variable
	---------------------------

	For Loop (In)
	---------------------------

	While Loop
	---------------------------

	For In Loop
	---------------------------

	Do While Loop
	---------------------------
		Runs at least once.

*/

// For Loop: (initialize a variable; boolean expression; what to do at each loop)  

	for (var i = 0; i < 10; i = i + 1){
		console.log(i) //Prints 0 through 9
	}

			//CHALLENGE: Using a for loop, count to 20 by twos.

		for (var i = 2; i <= 20; i = i + 2){
			console.log(i) //Prints 2 through 20
		}

// While Loop:

			var j = 0 		//initialize a variable


		while (j < 5) { 	// boolean expression
			j = j + 1 		// what to do at each loop
			// or j += 1, or j++

			console.log(j) 
		}

			//CHALLENGE: Create a while loop that counts to 100 by tens.

			var x = 0

		while(x <= 90){
			x = x + 10
			
			console.log(x)
		}

// For In Loop:

	var studentName = "smita";

//        LCV     COLLECTION
	for (var l in studentName) {
		console.log(l)
	}

// This loop automatically stopped at the end of the collection. 

// CHALLENGE: Using this For In Loop, capitilize the first letter and rebuild the rest of the name.
	
	var nameHolder = ''

	for (var l in studentName) {
		if(l == 0) {
			nameHolder += studentName[l].toUpperCase()
		} else {
			nameHolder += studentName[l]
		}
	}
	console.log(nameHolder)