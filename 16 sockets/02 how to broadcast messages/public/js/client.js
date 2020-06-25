const socket = io();

socket.on('greeting', (msg) => {
    console.log(`Server: "${msg}"`);
});

socket.on('client connected', () => {
    console.log('Another client connected.');
});

socket.on('client disconnected', (msg) => {
    console.log('Another client disconnected.');
});

socket.on('clients count', (count) => {
    console.log(`Connected clients: ${count}`);    
});