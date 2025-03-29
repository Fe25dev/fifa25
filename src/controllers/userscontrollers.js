const { Op } = require('sequelize');
const User = require('../models/user');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};
//todos los users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll(); // Obtener todos los usuarios

        if (users.length === 0) {
            return res.status(404).json({ message: 'No se encontraron usuarios' });
        }

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);  // Buscar por ID

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el Usuario' });
    }
};

// Actualizar usuario

const updateUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return   res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await user.update(req.body);
        res.json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
};

//**************************
const userLogin = async(req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { user_email: email } });

  if (!user) {
    return res.status(401).json({ message: 'Credenciales incorrectas' });
  }

  // Generar token JWT
  const token = jwt.sign({ user_email: user.user_email }, 'your-secret-key', { expiresIn: '3h' });
    res.json({ token });
};

// Middleware para verificar el token
function verifyToken(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]; // El token suele estar en el encabezado Authorization

  if (!token) {
    return res.status(403).send('Acceso denegado');
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(403).send('Token inválido');
    }
    req.user = decoded;
    next();
  });
}


//**************************

module.exports = {
    userLogin,
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
};
