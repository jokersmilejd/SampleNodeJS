var express = require("express");
var bodyParser = require("body-parser");

var urlEncoderParser = bodyParser.urlencoded({extended:false});

var app = express();

app.post("/register", urlEncoderParser, function(request, response){
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.send(`${request.body.email}  ${request.body.password}`);
});

app.get("/", function(request, response){
    response.send("<h2>Pickle rick!!!</h2>");
});

const port = process.env.PORT || '8080';
app.listen(port, () => {console.log("Server is runnig on port " + port)});