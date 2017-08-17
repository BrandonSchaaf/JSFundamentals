// ARRAYS: A set of data held inside of one let. Boxes within a box. Even of different data types (even other arrays)

let students = ['Thomas', 'Madyson', 'Brandon', 'Leon', 23, true, ['Jackson', 'Perry']];

console.log(students[2]);

//CHALLENGE: Grab the nested array out of the students array and grab 'Perry' then print to console "Hello, Perry the Platypus."

console.log("Hello," ,students[6][1], "the Platypus.")

let arrFood = ['Quesadilla', 'Pecan Pie', 'Potato', 'Cheesecake', 'Shrimp Pasta'];

// 'of' instead of 'in' prints the value instead of the number

for (let item of arrFood){
	console.log(item) //Prints the list of each food item
}

// How to add an item to an array:

arrFood.push('NY Style Pizza');

// How to add an item to a specific location within an array. The first number is where you want to start splicing, the second number is how many to remove, then what to replace with. This removes the second item, deletes only that item, and inserts Blueberry Pie:

arrFood.splice(1, 1, 'Blueberry Pie');

//This is .forEach - the job of position one (f) is to print the value, the job of the second position (b) is to print the index, the third position (a) prints the entire array.

arrFood.forEach(function(f, b, a){
	console.log(f)
	console.log(b)
	console.log(a)
})