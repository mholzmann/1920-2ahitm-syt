// import modules
const express = require('express');
const socketIO = require('socket.io');

// specify http server port
const port = 3000;

// create express application
const app = express();

// mount middleware
app.use(express.static('public', {extensions: ['html']}));  // server static files

// start http server
const httpServer = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// create socket.io server
const io = socketIO(httpServer);

// add event listener for new client connection
io.on('connection', (socket) => {
    console.log('a client connected');

    // emit message to new client
    socket.emit('greeting', 'Hello, new client!');
    
    // add event listener for client is disconnecting
    socket.on('disconnect', () => {
        console.log('a client disconnected');
    });
});