const livros = require('../models/Livro')

class LivroController {

    static findAll = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static findById = (req, res) => {
        const id = req.params.id
        livros.findById(id, (err, livros) => {
            // tratar o erro ou o sucesso, baseado na função de callback, 
            // utilizando os parâmetros err, livros
            if (err) {
                res.status(404).send(
                    {
                        message: 'Livro não encontrado',
                        error: err.message
                    })
            } else {
                res.status(200).json(livros)
            }
        })
    }

    static createBook = (req, res) => {
        let livro = new livros(req.body)

        livro.save(err => {
            if (err) {
                res.status(500).send(
                    {
                        message: 'Erro ao salvar o livro.',
                        error: err.message
                    })
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id

        console.log('id', id)
        livros.findByIdAndDelete(id, (err) => {
            // tratar o erro ou o sucesso, baseado na função de callback, 
            // utilizando os parâmetros err, livros
            if (err) {
                console.log('1')
                res.status(404).send(
                    {
                        message: 'Não foi possível deletar! Livro não encontrado',
                        error: err.message
                    })
            } else {
                console.log('2')
                res.status(200).send({ message: 'O livro foi deletado' })
            }
        })
    }

    static updateBook = (req, res) => {
        let id = req.params.id

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(404).send(
                    {
                        message: 'Não foi possível atualizar! Livro não encontrado',
                        error: err.message
                    })
            } else {
                
            }
        })
    }
}

module.exports = LivroController
