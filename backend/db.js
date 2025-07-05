const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "perfil_usuarios"
});

connection.connect((err => {
    if (err) {
        console.log("Erro ao conectar ao banco de dados", err);
        return;
    }
    console.log("Conexão estabelecida com sucesso");
}));

module.exports = connection;