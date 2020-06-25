const socket = io();

socket.on('greeting', (msg) => {
    console.log(`Server: "${msg}"`);
});
