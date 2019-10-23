//DECLARATION
var express = require('express');
var app = express();
var ejs = require('ejs');
var bodyParser = require('body-parser');
var expSession = require('express-session');
var cookieParser = require('cookie-parser');

//CONFIGURATION
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(expSession({secret:'my top secret value', saveUninitialized:true, resave: false}));
app.use(cookieParser());
app.use('/login', login);
app.use('/home', home);



//ROUTER

app.get('/', function(request, response){
	response.send('index page!');
});



app.listen(3000, function(){
	console.log('server started at 3000...');
});