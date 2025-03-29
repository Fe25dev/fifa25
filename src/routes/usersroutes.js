
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userscontrollers');

// Rutas para los usuarios
router.post('/users/login', usersController.userLogin);  // login
router.post('/users', usersController.createUser);  // Crear un nuevo User
router.get('/users', usersController.getAllUsers);  // Obtener Usuarios
router.get('/users/:id', usersController.getUserById);  // Obtener User por ID
router.put('/users/:id', usersController.updateUserById);  // Actualizar User por ID
module.exports = router;
