var express = require('express');
var app = express();
var sys = require('sys')
var exec = require('child_process').exec;

app.get('/',function(req,res){
	res.send('working');
});


app.get('/nodever',function(req,res){
// or more concisely
function puts(error, stdout, stderr) { res.send(stdout) }
exec("ls -la", puts);
});

app.listen('8086');