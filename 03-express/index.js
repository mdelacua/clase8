const express = require('express');
const path = require('node:path');
const cors = require('cors');
const usuarioRouter = require('./routes/usuarioRouter');
const { Middlewares } = require('./services/middlewares');
const app = express();

app.use(Middlewares);
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, '/public'))); 

app.use('/api/usuarios', usuarioRouter);

module.exports = app;