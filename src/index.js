// Imports
const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');
const config = require('./config')
const api = require('./routes/api.js')
//Objeto aplicacion
const app = express();

//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', config.app.port);

//routes
app.use(routes);
app.use('/api', api)

// static files
//app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'), () => {
    console.log(path.join(__dirname, 'views'))
    console.log(`Example app listening on port http://localhost:${app.get('port')}/api`)
});
