const express = require('express');
const socketIO = require('socket.io');

const port = 3000;

const app = express();

app.use(express.static('public', {extensions: ['html']}));  // server static files

const httpServer = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const io = socketIO(httpServer);

const usernames = [];

// add event listener for new client connection
io.on('connection', (socket) => {
    socket.on('chat message', (message) => {
        io.emit('chat message', message);
        console.log(message);
    });
});