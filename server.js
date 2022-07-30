var express  =require("express");
var app= express();
app.get("/",(req,res)=>{

    res.send(
        "<h1>Science Fair</h1>"
        +"<hr/>"
        +"<h3>Technologies trending nowadays</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Cloud computing</li>"
        +"<li>Web technologies</li>"
        +"<li>Database servers</li>"
        +"<li>Console application</li>"
        +"</ol>"


    );
});

app.get("/aboutus",(req,res)=>{

    res.send(
        "<h1>cloud computing:  cloud computing is the delivery of computing services—including servers, storage, databases, networking etc</h1>"
        +"<hr/>"
        
        +"<ol>"
        +"<li>private clouds</li>"
        +"<li>public clouds</li>"
        +"<li>hybrid clouds</li>"
        +"<li>multiclouds</li>"
        +"</ol>"


    );
});

var server=app.listen(9000);
console.log("Science fair running on port 9000");
