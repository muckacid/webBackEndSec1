exports.success = function (req, res, msg = '', status = 200) {
    res.status(status).send({
        error: false,
        status: status,
        body: msg
    });
}

exports.error = function (req, res, msg = 'Error interno', status = 500) {
    res.status(status).send({
        error: true,
        status: status,
        body: msg
    });
}