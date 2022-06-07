// IMPORTING THE REQUIRED MODULES
const express = require('express');
const path = require('path');


// HOSTNAME AND PORT
const hostname = '127.0.0.1';
const port = 80;

const app = express();      // STARTING THE EXPRESS SERVER


// EXPRESS SPECIFIC STUFF
app.use(express.static(path.join(__dirname, 'public')));


// PUG SPECIFIC STUFF
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// ENDPOINTS --> GET
app.get('/', (req, res) => {
    res.render('index');
});


// ENDPOINTS --> POST




// LISTENING THE SERVER
const server = app.listen(port, () => {
    console.log(`The application started on http://${hostname}:${port}/`);
});