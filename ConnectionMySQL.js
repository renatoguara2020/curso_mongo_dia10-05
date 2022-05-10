const Sequelize = require('sequelize');

const sequelize = new Sequelize('celke', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!", err);
});

module.exports = sequelize;