const express = require('express');
const router = express.Router();

const {
    descargas,
    home,
    bienvenida,
    registro,
    guardar,
    formulario,
    registarUsuario,
    actualizar,
    borrar,
    template
} = require('../controllers/usuarioController');

const { encriptar } = require('../services/middlewares');


router.get('/bienvenida', bienvenida);
router.get('/registro', registro);
router.get('/descarga', descargas);
router.get('/index', home);
router.post('/guardar', encriptar, guardar);
router.post('/registro', registarUsuario);
router.post('/formulario', formulario);
router.put('/actualizar',actualizar);
router.delete('/borrar', borrar);
router.get('/template', template);

module.exports = router;