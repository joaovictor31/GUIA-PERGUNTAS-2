const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render("perguntar.ejs");
})



app.listen(8080, function(){
    console.log('Funciona');
})