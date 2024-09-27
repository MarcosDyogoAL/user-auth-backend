const express = require('express');
const { registerUser } = require('./controllers/userController');

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para tratar JSON

// Rota de cadastro de usuário
app.post('/register', registerUser);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
