const express = require('express')
const livros = require('./livroRoutes')
const autores = require('./autorRoutes')

const routes = (app) => {

    app.use(
        express.urlencoded({
            extended: true
        })
    )

    app.use(
        express.json(), 
        livros,
        autores
    )
}

module.exports = routes
