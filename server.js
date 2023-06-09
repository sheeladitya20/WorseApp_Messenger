const express = require ('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 2020

http.listen(PORT, () => {
    console.log(`Port running very smoohtlyyyy on  ${PORT}`)
})

app.use(express.static(__dirname + '/public'))


app.get ('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})


//socket

const io = require ('socket.io')(http)

io.on ('connection', (socket) => {
    console.log('Connected...')

socket.on('message', (msg) => {
socket.broadcast.emit('message', msg )
})

})