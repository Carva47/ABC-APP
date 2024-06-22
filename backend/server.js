const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abconnect01@',
    database: 'abc_database'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});

// Rotas de registro e login

app.post('/register', (req, res) => {
    const { gestorName, password, nameCompany, email, province, streetAddress, nifEmpresa, actuacao, telefone } = req.body;

    db.query('INSERT INTO users (gestorName, password, email, telefone) VALUES (?, ?, ?, ?)', [gestorName, password, email, telefone], (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao registrar usuário: ' + err.message);
        }
        const userId = result.insertId;

        db.query('INSERT INTO companies (nameCompany, province, streetAddress, nifEmpresa, actuacao, user_id) VALUES (?, ?, ?, ?, ?, ?)', [nameCompany, province, streetAddress, nifEmpresa, actuacao, userId], (err, result) => {
            if (err) {
                return res.status(500).send('Erro ao registrar empresa: ' + err.message);
            }
            res.send('Registro bem-sucedido!');
        });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

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

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
