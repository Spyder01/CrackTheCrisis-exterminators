const express = require('express');
const Users = require('../../db/Model');
const bcrypt = require('bcrypt');
const app = express.Router();


app.get('/sign-up', (req, res) => {
    res.send ('<h1>Hello, World!!</h1>');
})

app.post('/sign-up', async (req, res)=>{
    const Info = req.body;
    console.table(Info)
    const user = await Users.findOne({ email: Info.email });
    if (!user) {
        addUser(Info, res);
    }
     else {
         res.status(400).send('Email ID already exists');
     }
     
})


module.exports = app;


const addUser = async ({firstName, lastName, email, password}, res)=>{
 try {
    const Password = await bcrypt.hash(password, 10);
    const user = new Users({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: Password
    })
    try {
       const newUser = await user.save (); 
       res.status(201).send("Sign Up successful")
        
    } catch (err) {
        console.error(err);
    }
 }catch (err) {
     console.error(err);
 }

}



