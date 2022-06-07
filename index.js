// IMPORTING THE REQUIRED MODULES
const express = require('express');
const path = require('path');

// Importing Custom Modules
const connectToMongo = require('./db');
const User = require('./models/User');

connectToMongo();           // Connecting to mongo



// HOSTNAME AND PORT
const hostname = '127.0.0.1';
const port = 80;

const app = express();      // STARTING THE EXPRESS SERVER


// EXPRESS SPECIFIC STUFF
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());


// PUG SPECIFIC STUFF
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// ENDPOINTS --> GET
app.get('/', (req, res) => {
    res.render('index');
});


// ENDPOINTS --> POST
app.post('/', (req, res) => {
    const new_user = new User(req.body);
    console.log(req.body);

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    console.log(`Name --> ${name}`);
    console.log(`Email --> ${email}`);
    console.log(`Password --> ${password}`);

    new_user.save().then(() => {
          res.send("This item has been saved to the database");
     }).catch(() => {
          res.status(400).send("Failed");
     });
})



// LISTENING THE SERVER
const server = app.listen(port, () => {
    console.log(`The application started on http://${hostname}:${port}/`);
});