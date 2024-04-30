// Imports
const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');

//Objeto aplicacion
const app = express();

//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

//routes
app.use(routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));
app.listen(2000, () =>
    console.log(`Example app listening on port http://localhost:${2000}`)
);
