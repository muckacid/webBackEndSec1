const mysql = require('mysql2');
const config = require('../config.js');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password:  config.mysql.password,
    database: config.mysql.database
}

let conn;
function connMYSQL(){

    conn = mysql.createConnection(dbConfig);

    conn.connect((error) => {
        if(error){
            console.log('[db error]', error);
            setTimeout(connMYSQL, 2000);
        } else {
            console.log('[db conectada]');
        }
    });

    conn.on('error', error => {
        console.log('[db error]', error);
        if(error.code === 'PROTOCOL_CONNECTION_LOST'){
            connMYSQL();
        } else {
            throw error;
        }
    });
}
connMYSQL();

function getAll(tabla){
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

module.exports = { getAll }