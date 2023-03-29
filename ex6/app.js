const express = require('express');
const app = express();

const routes = require('./api');

app.use(routes);

app.get('/', (_, res) => {
    res.send({
        messsage: 'Hello World'
    });
});

module.exports = app;