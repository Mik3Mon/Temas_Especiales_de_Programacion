const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (_, res) => {
    res.send({
        message: 'Hello world'
    });
});

app.get('/random_number', (_,res) => {
    function randomNumber(max) {
        return Math.round(Math.random() * max);
    }
    res.send({
        message:`Random Number: ${randomNumber(10)}`
    });
});

app.post('/fibonacci', (_,res) => {
    function fibonacci(terms){
        let fibonacci = [0,1];
        for(let i = 2; i <= terms; i++){
            fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
        }
        return fibonacci;
    }
    res.send({
        message:`First 10 terms of Fibonacci:${fibonacci(10)}`
    });
});

app.post('/', (_, res) => {
    res.send({
        message: 'Foo bar'
    });
});

app.put('/foo', (req, res) => {
    res.send({
        method: req.method,
        url: req.url
    })
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT :${PORT}`);
});