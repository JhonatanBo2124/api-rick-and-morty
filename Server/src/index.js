// const http = require('http');
// const { getCharById } = require('./controllers/getCharById')
// // const data = require('./utils/data')
// const PORT = 3001 

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // if(req.url.includes('/rickandmorty/character')){
//     //     let id = req.url.split('/', -1)[(req.url.split('/').length)-1]
//     //     const character = data.find((character) => character.id === Number(id))

//     //     res.writeHead(200, {"Content-type": "application/json"})
//     //     res.end(JSON.stringify(character))
//     // }
//     if(req.url.includes('/rickandmorty/character')){
//         let id = Number(req.url.split('/').at(-1))
//         getCharById(res, id)
//     }
// }).listen(PORT, 'localhost')

const express = require('express')
const server = express()
const PORT = 3001
const { router } = require('./routes/index') 
const morgan = require('morgan')
const cors = require('cors')

server.use(cors())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
server.use(express.json())
server.use(morgan('dev'))
server.use('/rickandmorty', router)

server.listen(PORT, () => {
    console.log('el servidor esta funcionando en el puerto', PORT);
})