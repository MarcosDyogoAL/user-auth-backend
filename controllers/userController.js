const { createUser, findUserByEmail } = require('../models/userModel');

// Função para cadastrar um novo usuário
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar se o usuário já existe
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já cadastrado' });
        }

        // Criar um novo usuário
        const newUser = await createUser(name, email, password);
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};

module.exports = { registerUser };
