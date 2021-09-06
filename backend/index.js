const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const BodyParser = require('body-parser');
const cors = require('cors');
const SignUp = require('./routes/auth/SignUp')
const Login = require('./routes/auth/login')
const Scrapper = require('./routes/scrapper/scrapper')
const Socket = require('./routes/socket/sockets')
const bcrypt = require('bcrypt');



dotenv.config();

const app = express ();
app.use(express.json())
app.use(BodyParser.json())
app.use(cors())
const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("<h1>Hello, World!!</h1>")
})

app.use('/auth', SignUp)
app.use('/auth', Login)
app.use('/socket', Socket);
app.use('/jobs', Scrapper)


const DataBaseAuth = `mongodb+srv://Suhan:${process.env.MONGO_PASSWORD}@exterminators.7pup1.mongodb.net/Exterminators?retryWrites=true&w=majority`
mongoose.connect(DataBaseAuth, {useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
    app.listen(PORT, ()=>{
        console.log("Server Running...")
    })
}).catch((err)=>console.error(err));



