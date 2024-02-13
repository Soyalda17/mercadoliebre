const { log } = require('console');
const express = require('express');
const path = require('path');

const app = express();

app.listen(3003, () => console.log('Sevidor Corriendo En El Puerto 3003'));


app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/index.html'))});