const express = require('express');
const router = express.Router();
const path = require('node:path');
const { encriptar } = require('../services/middlewares');


router.get('/descarga', (req, res) => {
    console.log('Entro a descarga');
    console.log(path.join(__dirname, '../public/descarga.txt'));
    console.log(path.resolve(__dirname, '../public/descarga.txt'));
    res.download(path.join(__dirname, '../public/descarga.txt'));
});

router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); 
});

router.post('/guardar', encriptar, (req, res) => {
    const nombre = req.body.nombre;
    console.log(nombre);
    res.status(201).send('Guardado Nombre: ' + nombre); 
});


router.post('/formulario', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const apellido = req.body.apellido;

    console.log(`Hola ${nombre} ${email} ${apellido}`);

/*     const {
        nombre, 
        apellido, 
        email
    } = req.body; */
    
    res.json({
        Nombre: nombre,
        Apellido: apellido,
        Email: email
    });

});

router.put('/actualizar', (req, res) => {
    res.send('Actualizando');
});

router.delete('/borrar', (req, res) => {
    res.send('Borrando');    
})

module.exports = router;