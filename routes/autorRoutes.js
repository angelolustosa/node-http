const express = require('express')
const AutorController = require('../controllers/AutorController')

const routes = express.Router()

routes
    .get('/autores', AutorController.findAll)
    .get('/autor/:id', AutorController.findById)
    .post('/autor', AutorController.createBook)
    .delete('/autor/:id', AutorController.deleteBook)
    .put('/autor/:id', AutorController.updateBook)

module.exports = routes
