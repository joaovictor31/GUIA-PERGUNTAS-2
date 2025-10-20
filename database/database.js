const Sequelize = require('sequelize'); //Meu banco
const connection = new Sequelize('guiaperguntas','root','84913601', { //nome do banco, usuário e senha
    host: 'localhost',
    dialect: 'mysql'
}); 

module.exports = connection;