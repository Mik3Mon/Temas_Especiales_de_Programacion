const express = require('express');
const app = express();

const routes = require('./api');

app.use(express.json());
app.use(routes);

module.exports = app;