const express = require('express');
const app = express();

app.use(express.json());

const treinosRoutes = require('./routes/treinos.routes');

app.use(treinosRoutes);

module.exports = app;