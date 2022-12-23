const autores = require('../models/Autor')

class AutorController {

    static findAll = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static findById = (req, res) => {
        const id = req.params.id
        autores.findById(id, (err, autores) => {
            // tratar o erro ou o sucesso, baseado na função de callback, 
            // utilizando os parâmetros err, autores
            if (err) {
                res.status(404).send(
                    {
                        message: 'Autor não encontrado',
                        error: err.message
                    })
            } else {
                res.status(200).json(autores)
            }
        })
    }

    static createBook = (req, res) => {
        let autor = new autores(req.body)

        autor.save(err => {
            if (err) {
                res.status(500).send(
                    {
                        message: 'Erro ao salvar o autor.',
                        error: err.message
                    })
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id

        console.log('id', id)
        autores.findByIdAndDelete(id, (err) => {
            // tratar o erro ou o sucesso, baseado na função de callback, 
            // utilizando os parâmetros err, autores
            if (err) {
                console.log('1')
                res.status(404).send(
                    {
                        message: 'Não foi possível deletar! Autor não encontrado',
                        error: err.message
                    })
            } else {
                console.log('2')
                res.status(200).send({ message: 'O autor foi deletado' })
            }
        })
    }

    static updateBook = (req, res) => {
        let id = req.params.id

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(404).send(
                    {
                        message: 'Não foi possível atualizar! Autor não encontrado',
                        error: err.message
                    })
            } else {
                res.status(200).send({ message: 'O autor foi atualizado' })
            }
        })
    }
}

module.exports = AutorController
