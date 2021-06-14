const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I made a second page'));
app.get('/second', (req, res) => res.send('you found the second page'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
