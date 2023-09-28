const express = require('express'); 
const app = express();
const path = require('path'); 

app.listen(3001);
app.use(express.static(path.resolve(__dirname, '/.public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))});