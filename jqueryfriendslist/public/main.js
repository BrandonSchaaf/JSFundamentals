$(document).ready(function(){

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall'
	}).done(function(data){
		console.log(data);
	})

	$(submitBtn).click(function(){

		let person = {
			name: nameField.value,
			email: emailField.value
		}

		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
			data: person
		})
	})

	var submittedInfo = ""
	"<li>" +
	"<p><b>Name:</b> {{nameField.value}}</p>" +
	"<p><b>E-mail</b> {{emailField.value}}</p>" +
	"<button id='{{id}}' class='remove'>X</button>" +
	"</li>";

	$(list).submitted(function(){
		append submittedInfo
	})

	$(deleteBtn)
})