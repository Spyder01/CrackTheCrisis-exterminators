const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const BodyParser = require('body-parser');




dotenv.config();

const app = express ();
app.use(BodyParser.json())
const PORT = process.env.PORT || 5000;



app.get('/', (req, res)=>{
    res.send("<h1>Hello, World!!</h1>")
})

const DataBaseAuth = `mongodb+srv://Suhan:${process.env.MONGO_PASSWORD}@exterminators.7pup1.mongodb.net/Exterminators?retryWrites=true&w=majority`
mongoose.connect(DataBaseAuth, {useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
    app.listen(PORT, ()=>{
        console.log("Server Running...")
    })
}).catch((err)=>console.error(err));



