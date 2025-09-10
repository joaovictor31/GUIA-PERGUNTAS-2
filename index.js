const express = require("express");
const app = express();

app.set('view engine','ejs');

app.get("/:nome/:idade", (req,res) => {
    let nome = req.params.nome;
    let idade = req.params.idade;
    res.render("index", {
        nome: nome,
        idade: idade,
        altura: 1.70
    });
})

app.listen(8080, function(){
    console.log('Funciona');
})