const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const BodyParser = require('body-parser');
const cors = require('cors');
const SignUp = require('./routes/auth/SignUp')
const Socket = require('./routes/socket/sockets')
const compile=require('./routes/comiler')

compile();


dotenv.config();

const app = express ();
app.use(BodyParser.json())
app.use(cors())
const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("<h1>Hello, World!!</h1>")
})

app.use('/auth', SignUp)
app.use('/socket', Socket);

app.listen(PORT, ()=>{
    console.log("Server Running...")
})


/*const DataBaseAuth = `mongodb+srv://Suhan:${process.env.MONGO_PASSWORD}@exterminators.7pup1.mongodb.net/Exterminators?retryWrites=true&w=majority`
mongoose.connect(DataBaseAuth, {useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
    app.listen(PORT, ()=>{
        console.log("Server Running...")
    })
}).catch((err)=>console.error(err));*/



