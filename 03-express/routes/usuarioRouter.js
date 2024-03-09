const express = require('express');
const router = express.Router();

const {
    descargas,
    home,
    bienvenida,
    guardar,
    formulario,
    actualizar,
    borrar,
    template
} = require('../controllers/usuarioController');

const { encriptar } = require('../services/middlewares');


router.get('/descarga', descargas);
router.get('/index', home);
router.post('/guardar', encriptar, guardar);
router.post('/formulario', formulario);
router.put('/actualizar',actualizar);
router.delete('/borrar', borrar);
router.get('/template', template);
router.get('/bienvenida', bienvenida);

module.exports = router;