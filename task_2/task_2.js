const express = require('express');
const app = express();
const Vigenere = require('caesar-salad').Vigenere;


const port = 8000;


app.get('/', (req, res) => {
    return res.status(200).send('Welcome');
});

app.get('/encode/:code', (req, res) => {
    const myEncode = Vigenere.Cipher('password').crypt(req.params.code);
    return res.status(200).send(`Encoded code result is ${myEncode}`);
});

app.get('/decode/:code', (req, res) => {
    const myDecode = Vigenere.Decipher('password').crypt(req.params.code);
    return res.status(200).send(`Encoded code result is ${myDecode}`);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});