const express=require('express')
const app= express()
const bodyParser= require('body-parser')

app.use(express.static("public"))

app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html")
})
var unirest = require("unirest");

var req = unirest("GET", "https://covid19india.p.rapidapi.com/getIndiaStateData");

req.headers({
	"x-rapidapi-host": "covid19india.p.rapidapi.com",
	"x-rapidapi-key": "0ed0d8c1bdmsh0ac4e941e21bd7cp1250c3jsnd79c0aff37ee"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});


app.listen(3000, function(){
  console.log('Server is running')
})
