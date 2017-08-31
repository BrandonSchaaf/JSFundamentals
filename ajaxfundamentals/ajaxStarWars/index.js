const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

//app is the const above
//get is an http method that means "if I get"
//'/about' is what get is looking for
//the req and res function stands for request and respond
//res.send is thinking "I got the get. respond with..."

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
})

http.listen(3000, function(){
	console.log('Listening on port 3000');
})