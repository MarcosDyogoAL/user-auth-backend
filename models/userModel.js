const pool = require('../db'); // Conexão com o PostgreSQL

// Função para criar um novo usuário no banco de dados
const createUser = async (name, email, password) => {
    const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
    );
    return result.rows[0];
};

// Função para buscar um usuário pelo email (para verificação posterior)
const findUserByEmail = async (email) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );
    return result.rows[0];
};

module.exports = { createUser, findUserByEmail };
