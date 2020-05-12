const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const https=require('https')

app.use(bodyParser.urlencoded({extende:true}))

app.get("/",function(req,res){
const unirest = require("unirest");

var req = unirest("GET", "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india");

req.headers({
	"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
	"x-rapidapi-key": "0ed0d8c1bdmsh0ac4e941e21bd7cp1250c3jsnd79c0aff37ee",
	"useQueryString": true
});
  console.log(res.body)

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
})


app.listen(3000,function(){
  console.log('Server is running')
})
