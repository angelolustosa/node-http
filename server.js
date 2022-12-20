const express = require('express')
const app = express()

const routes = require('./routes/index')
routes(app)

const db = require('./config/dbConnect')

db.on('error', console.log.bind(console, 'Erro ao conectar com o banco!'))
db.once('open', ()=> {
    console.log('Conexão realizada com Sucesso!')
})

const hostame = 'localhost'
const port = 5000

/* const books = [
    { _id: 1, title: 'O Dia do Curinga', autor: 'Jostein Gaarden', favorito: true },
    { _id: 2, title: 'O Mundo de Sophia', autor: 'Jostein Gaarden', favorito: true },
    { _id: 3, title: 'A Casa', autor: 'Raquel de Queiroz', favorito: false },
] */



//uri
app.get('/', (req, res) => {
    res.json({ nome: 'Angelo L!' })
})

/* app.get('/books', (req, res) => {
    livros.find((err, livrosDoBanco)=>{
        if(err) res.status(400);

        res.status(200).json(livrosDoBanco);
    })
}) */

/* app.post('/books', (req, res) => {
    // o body contém a lista que é enviada
    const body = req.body
    console.log('body', body)

    //percorrer a lista (sacola)
    body.map(obj => books.push(obj)  )

    res.send(books)
})
 */
app.get('/books/:id', (req, res) => {

    const book = books.find(
        (book) => book._id == req.params.id
    )

    if (book)
        res.send(book)
    else
        res.sendStatus(404)

})

app.delete('/books/:id', (req, res) => {
    let id = req.params.id
    let index = books.findIndex(obj => obj._id === parseInt(id))

    console.log('index', index)

    books.splice(index, 1)

    res.status(200).json(books)
})

app.patch('/books/:id', (req, res) => {
    let id = parseInt(req.params.id)

    let book = books.find(obj => obj._id === id)
    console.log('book:', book)

    let body = req.body
    console.log('body:', body)

    book.title = body.title
    book.autor = body.autor

    res.send(books)



})

app.listen(
    port,
    hostame,
    () => console.log(`http://${hostame}:${port}`)
) 