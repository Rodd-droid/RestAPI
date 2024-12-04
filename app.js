const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send({ message: "Hola Mundo desde REST API" });
});

app.listen(3000, () => {
    console.log('API REST escuchando en el puerto 3000');
});
