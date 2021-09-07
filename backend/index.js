const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const BodyParser = require('body-parser');
const cors = require('cors');
const SignUp = require('./routes/auth/SignUp')
const Login = require('./routes/auth/login')
const Scrapper = require('./routes/scrapper/scrapper')
const compile = require('./routes/comiler')
const bcrypt = require('bcrypt');
const { isObject } = require('util');
/*const app2=require('express')();*/
const app = express();
const server = require('http').createServer(app);

dotenv.config();


app.use(express.json())
app.use(BodyParser.json())
app.use(cors())
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("<h1>Hello, World!!</h1>")
})

app.use('/auth', SignUp)
app.use('/auth', Login)
app.use('/jobs', Scrapper)

server.listen(PORT, () => {
    console.log("Server Running...")
})


/*const DataBaseAuth = `mongodb+srv://Suhan:${process.env.MONGO_PASSWORD}@exterminators.7pup1.mongodb.net/Exterminators?retryWrites=true&w=majority`
mongoose.connect(DataBaseAuth, {useNewUrlParser: true, useUnifiedTopology: true}).then((res) => {
    app.listen(PORT, ()=>{
        console.log("Server Running...")
    })
}).catch((err)=>console.error(err));*/
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

var count=0;
var id=0;
io.on('connection', socket => {
    if(count==0){
        id=socket.id;
    }
    count++;
    socket.on('data', ({ lang, code, input }) => {
        compile(lang, code, input, socket);
    })

    socket.on('connected',(data)=>{
        console.log(data);
        /*console.log(id);*/
        if(data!=id){
        io.to(id).emit('calluser',data);
        }
    })

    socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ from }) => {
		io.to(userToCall).emit("callUser", { from });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});

    socket.emit('me', socket.id);
})