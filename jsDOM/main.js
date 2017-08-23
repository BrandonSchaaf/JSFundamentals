$(submit).click(capitalize)
$(input).keypress(function (e){
	if(e.keyCode === 13){
		capitalize();
	}
})

function capitalize(){
	let newName = "";

	for (let l in input.value){
		if (l == 0){
			newName = input.value[l].toUpperCase()
		} else {
			newName += input.value[l].toLowerCase()
		}
	}
	input.value=""
	output.innerHTML = "Capitalized Name: " + newName
	$(nameList)
		.append('<li>')
		.append(newName)
}

input.onkeypress = function (e){
	if(e.keyCode === 13){
		capitalize();
	}
}