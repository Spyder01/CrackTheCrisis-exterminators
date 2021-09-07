const express = require('express');
const Users = require('../../db/Model');
const bcrypt = require('bcrypt');
const app = express.Router();

app.get('/login', (req, res)=>{
    const {email, password} = req.body;
    

})

module.exports = app;