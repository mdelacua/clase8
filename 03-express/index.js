const express = require('express');
const path = require('node:path');
const cors = require('cors');
const userHome = require('./routes/userHome');
const hbs = require('hbs');
const usuarioRouter = require('./routes/usuarioRouter');
const { Middlewares } = require('./services/middlewares');
const app = express();

app.use(Middlewares);
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, '/public'))); 

//Seteamos el motor de plantillas que usaremos - SSR
app.set('view engine', 'hbs');

//Seteamos la carpeta en donde busca los archivos de plantillas
app.set('views', path.join(__dirname, 'views'));

//Seteamos los archivos parciales de hbs
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use('/', userHome);
app.use('/api/usuarios', usuarioRouter);

/* app.get('/', (req, res)=>{
    res.render('index');
}); */

module.exports = app;
