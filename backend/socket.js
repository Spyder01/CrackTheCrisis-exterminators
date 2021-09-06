
const cors=require('cors');
const {v4 : uuidV4} =require('uuid');


const socketfunction=(server,app)=>{
const io=require('socket.io')(server,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }
});
app.set('view engine','ejs');
app.use(express.static('../frontend/src/views'));
app.use(cors());

const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log('server is live');
});

app.get("/",(req,res)=>{
    res.redirect(`/${uuidV4()}`);
})

app.get('/:room',(req,res)=>{
    res.render(('Home'),{roomId:req.params.room});
})


io.on('connection',(socket)=>{
    socket.emit('me',socket.id);
    socket.on('joined',(roomId,userId)=>{
        socket.join(roomId);
        console.log(roomId,userId);
        socket.broadcast.to(roomId).emit('user-connected',userId);
    })
})
}