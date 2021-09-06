const express = require('express');
const socket = require('socket.io');


const app = express.Router ();

app.all('/connect/:id', (req, res) => {
    const io = socket(res.socket.server);

    io.on('connection', socket=>{
        console.log('Connection made')
    })

    res.json({response: "Sockets are set"});
})


module.exports = app;