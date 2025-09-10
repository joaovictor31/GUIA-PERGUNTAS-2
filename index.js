const express = require("express");
const app = express();

app.set('view engine','ejs');

app.get("/:nome/:idade/:nota", (req,res) => {
    let nome = req.params.nome;
    let idade = req.params.idade;
    let logado = true;
    let nota = req.params.nota;
    let temProdutos = true;
    res.render("index", {
        nome: nome,
        idade: idade,
        altura: 1.70,
        acesso: logado,
        nota:nota,
        estoqueProdutos: temProdutos
    });
})

app.listen(8080, function(){
    console.log('Funciona');
})