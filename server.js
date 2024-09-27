const express = require('express');
const pool = require('./db'); // Conexão com PostgreSQL

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para tratar JSON

// Endpoint de cadastro
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );
        res.status(201).json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
