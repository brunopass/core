const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const GET = require('./controller/GET')
const POST = require('./controller/POST')
const PATCH = require('./controller/PATCH')
const config = require('./config')

server.use(cors())
server.use(cookieParser())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))
server.use(POST)
server.use(GET)
server.use(PATCH)

const connection = server.listen(config.PORT, console.log(`running on ${config.PORT}`))
connection.on('connection', connection => {
    console.log(connection.address())
})

connection.on('error', error => {
    console.error(error.name)
    console.error(error.message)
})