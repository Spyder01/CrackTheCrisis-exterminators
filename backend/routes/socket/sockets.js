const express = require('express');
const {Server} = require('socket.io');
const cors = require('cors');


const app = express.Router ();
app.use(cors())

app.all('/connect/:id', (req, res) => {
    const io = new Server(res.socket.server, { cors: { origin: '*' } });
    io.on('connection', socket=>{
        console.log('Connection made')
    })

    res.json({response: "Sockets are set"});
})


module.exports = app;