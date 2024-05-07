const { Router } = require('express');
const ress = require('../res/response');
const controllerPersons = require('../controller/controllerPersons');

routerApi = new Router();

routerApi.get('/', (req, res) => {
    const lista = controllerPersons.obtenerTodos()
        .then((items) => {
            ress.success(req, res, items, 200)
        })
});

module.exports = routerApi;