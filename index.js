const $ = require('jquery');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log('Server listening at port %d', port);
})