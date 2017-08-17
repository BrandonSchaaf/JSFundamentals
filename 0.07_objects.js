// OBJECTS contain keys. Keys can contain arrays, functions, etc, and are called upon using a period.

let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'], //pies is an iterable property
	pieNames: [],
	getPies: function(){
		return food.pies;
	},
	pieName: function(){
		food.pies.forEach(function(x){
			console.log(x + ' Pie')
		})
	},
	newPies: function(){
		food.pies.forEach(function(flavor){
			food.pieNames.push(flavor + ' Pie')
		})
	}
}

food.newPies()
console.log(food.pieNames)


// console.log(food.pies[0] + ' Pie'); //Pecan Pie

// CHALLENGE: Iterate over the pie array, print each pie, and add "Pie" to them.

// food.pies.forEach(function(type){ //"function" is called a callback
// 	console.log(type + ' Pie')
// })

// console.log(food.getPies())

// CHALLENGE: Create a method inside of the object 'food' that appends 'pie' to each type.

// food.pieName()

