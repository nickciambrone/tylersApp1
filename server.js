var express = require("express");
var bodyParser=require('body-parser')
var path=require('path')
var sql=require('mysql')
var app = express();
var PORT = 9950;
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(bodyParser.json({type:'application/*+json'}))
app.use(bodyParser.raw({type:'application/vnd.custom-type'}))
app.use(bodyParser.text({type:'text/html'}))
var connection = sql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "tylersApp"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    

  });
  function addEmail(){
    connection.query("INSERT INTO emails (email) VALUES ?",'"'+[email]+'"', function(err, res) {
        console.log(email)
    })
  }
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,"index.html"))
})
app.get("/forest", function (req, res) {
    res.sendFile(path.join(__dirname,"forest.jpeg"))
})
var email;
app.post('/new',function(req,res){
    email=req.body.email;
    addEmail()

})

//----------------------------------------------------------------------------------------
app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT)
})