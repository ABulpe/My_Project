const express = require('express');
const UserCtrl = require('../controllers/UserController');

const Router = express.Router();

Router.get('/',UserCtrl.index) //Muestra todos los usuarios
      .post('/',UserCtrl.create) //Crea un usuario
      .get('/:key/:value',UserCtrl.find,UserCtrl.show) //Muestra un usuario
      .put('/:key/:value',UserCtrl.find,UserCtrl.update) //Actualiza usuario
      .delete('/:key/:value',UserCtrl.find,UserCtrl.remove) //Elimina un usuario




module.exports = Router;