const express = require('express');
const Users = require('../../db/Model');
const app = express.Router();


app.get('/sign-up', (req, res) => {
    res.send ('<h1>Hello, World!!</h1>');
})

app.post('/sign-up', async (req, res)=>{
    const Info = req.body;
    console.table(Info)
    const user = await Users.findOne({ email: Info.email });
    if(!user) console.log("hi there")
     
})


module.exports = app;