const express = require('express');
const app = express();

const port = process.env.PORT? process.env.PORT : 8000;

app.get('/random-integer', (req, res) => {
    let num = Math.floor(Math.random() * 999999) + 1;
    res.send({ number: num });
});

app.get('/random-decimal', (req, res) => {
    let num = Math.random()*2-1;
    res.send({ number: num });
});

app.listen(port, () => {
    console.log(`Aplicación ejecutándose en el puerto ${port}`)
});