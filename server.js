const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('Request served from node');
})

app.listen(port, ()=> {
    console.log(`node is listening on port ${port}`);
})