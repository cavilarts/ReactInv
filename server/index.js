const express = require('express');
const path = require('path');
const http = require('http');
const routes = require('../routes');

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

app.use('/', routes);

const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('server running on port ${port}'))