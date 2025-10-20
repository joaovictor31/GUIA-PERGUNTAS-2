const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //BODY PARSER
const connection = require("./database/database");

//Database
connection
    .authenticate()
    .then(() => {
        console.log('conexão realizada com sucesso!')
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

//Usando o view engine
app.set('view engine','ejs');
app.use(express.static('public'));

app.use(express.urlencoded({extended:false})) //BODY PARSER
app.use(express.json()) //BODY PARSER


//ROTAS =>
app.get("/", (req,res) => {
    res.render("index.ejs");
})


app.get("/perguntar", (req,res) => {
    res.render("perguntar.ejs");
})

app.post("/salvarpergunta", (req,res) => {
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send("Formulário Recebido! Título: " + titulo + " Descrição: " + descricao);
})


app.listen(8080, function(){
    console.log('Funciona');
})