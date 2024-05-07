const db = require('../db/mysql.sql');

const TABLA = "personas";

function obtenerTodos() {
    const res = db.getAll(TABLA);
    return res;
}

module.exports = { obtenerTodos };
