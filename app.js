const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const ejs = require("ejs")



const app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))



// now we are adding our database file here
// require("./db/conn");



const port = process.env.PORT || 3000;

app.get("/", (req, res) => {

res.render("index")
});

app.post("/", function(req,res){
    res.render("dash", {username: req.body.name})
    // res.sendFile(__dirname + "/index.html")
})

app.post("/upload", function(req,res){
    res.send("Congratulations File uploaded!! ")
})

app.listen(port, () => {
    console.log("server is running .....");
})