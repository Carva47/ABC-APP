const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abconnect01@',
    database: 'abc_database'
});

// Estabelecendo a conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Rota para registro de usuário e empresa
app.post('/register', (req, res) => {
    const { gestorName, password, nameCompany, email, province, streetAddress, nifEmpresa, actuacao, telefone } = req.body;

    // Inserindo dados na tabela 'users'
    db.query('INSERT INTO users (gestorName, password, email, telefone) VALUES (?, ?, ?, ?)', [gestorName, password, email, telefone], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao registrar usuário: ' + err.message);
        }
        const userId = result.insertId;

        // Inserindo dados na tabela 'companies'
        db.query('INSERT INTO companies (nameCompany, province, streetAddress, nifEmpresa, actuacao, user_id) VALUES (?, ?, ?, ?, ?, ?)', [nameCompany, province, streetAddress, nifEmpresa, actuacao, userId], (err, result) => {
            if (err) {
                return res.status(500).send('Erro ao registrar empresa: ' + err.message);
            }
            res.send('Registro bem-sucedido!');
        });
    });
});

// Rota para login de usuário
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Verificando as credenciais do usuário no banco de dados
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao fazer login: ' + err.message);
        }
        if (result.length > 0) {
            res.send('Login bem-sucedido!');
        } else {
            res.status(401).send('Credenciais inválidas.');
        }
    });
});

// Iniciando o servidor na porta especificada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
