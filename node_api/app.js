const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.end("Node server Working !!!")
});

app.listen(3000, '0.0.0.0');
