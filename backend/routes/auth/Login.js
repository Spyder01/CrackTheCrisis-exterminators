const express = require('express');
const Users = require('../../db/Model');
const bcrypt = require('bcrypt');
const app = express.Router();

app.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    const user = await Users.findOne({email: email});
    console.log(user)
    if (user) {
        try {
            if( await bcrypt.compare(password, user.password))  {
                res.sendStatus(201);
                res.json({
                    details: user,
                    msg: "Success"
                })
            }
            else {
                res.status(501).send("Incorrect Password")
            }
        } catch(error) {
            console.error(error);
        }
    } else {
        res.status(500).send("Email not found!")
    }

    

})

module.exports = app;