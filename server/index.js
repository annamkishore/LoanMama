
const express = require('express');
let app = express();
let port = 3000;

const routes = require('./routes');

app.use('/api', routes);
app.listen(port, () => console.log('Loan Mama Server listening on port: %d', port));
