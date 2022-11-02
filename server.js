const http = require('http')

const hostname = '192.168.2.138'
const port = 5000

http.createServer((req, res) => {
    console.log(req.url)
    http://192.168.2.138:5000/
    if(req.url === '/') {
        res.end('Home')
    }

    //res.end('Oi que lindo cara, Angelo!')
}).listen(port, hostname, () => console.log(`Servidor rodando http://${hostname}:${port}`) )