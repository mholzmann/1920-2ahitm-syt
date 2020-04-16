// import module
const express = require('express');

// specify http server port
const port = 3000;

// create express application
const app = express();

// mount middleware
app.use(express.static('public', { extensions: ['html'] }));  // serve static files

// start http server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});