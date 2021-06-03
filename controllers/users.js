const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const { id, name } = req.query;
    res.json({
        msg: 'get API from Controller',
        id,
        name
    })
}

const userPut = (req, res = response) => {
    const id = req.body.id;
    res.json({
        msg: 'put API from Controller',
        id
    })
}

const userPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API from Controller',
        nombre,
        edad
    })
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API from Controller'
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
}