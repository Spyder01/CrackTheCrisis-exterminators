const express = require('express');
const app = express.Router();

app.get('/sign-up', (req, res) => {
    res.send ('<h1>Hello, World!!</h1>');
})

app.post('/sign-up', (req, res)=>{
    const Info = req.body;

})


module.exports = app;