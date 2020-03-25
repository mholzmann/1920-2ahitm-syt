// import module
const express = require('express'); 

// create express application
const app = express();  

// specify http server port
const port = 3000;

// respond with "hello world" to a HTTP GET request at route '/'
app.get('/', (req, res) => {
    const options = {
        root: __dirname,
        headers: { 'Content-Type': 'text/html'}
    };
    res.sendFile('./public/index.html', { root: __dirname })
});    

// respond with "hello john" to a HTTP GET request at route '/john'
app.get('/john', (req, res) => {
    res.status(200).send('hello john');
});        

// respond with "hello <name>" to a HTTP GET request at route '/<name>' by using a route parameter for capturing the value from the URL
app.get('/:name', (req, res) => {
    res.send(`hi ${req.params.name}`);
});

// start http server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});