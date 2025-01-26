const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
});
