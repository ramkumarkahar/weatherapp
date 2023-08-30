const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")

 const staticpath = path.join(__dirname ,"../public");

 app.use(express.static(staticpath));
 app.set("view engine" ,"hbs")

app.get("/" , (req,res) =>{
    res.render("index")
});

app.get("/about" , (req,res) =>{
    res.render("about")
});

app.get("/weather" , (req,res) =>{
    res.render("weather")
});

app.get("*" , (req,res) =>{
    res.render("error")
});


app.listen(2000, ()=>{
    console.log('listening to the port no 2000')
});