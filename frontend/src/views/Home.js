import React,{useContext,useState,useRef,useEffect} from 'react';
import '../Css/home.css';
import Compiler from '../components/compiler/compiler';
import  io  from "socket.io-client";
import { socketcontext } from '../components/Socketconext/Socketconext';
import Peer from 'simple-peer';

const sock=io("http://localhost:5000/");



function Home() {
    const [stream,setStream]=useState(null);
    const [id,setId]=useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);

    const myvideo=useRef();
    const userVideo=useRef();
    const connectionRef=useRef();

    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video:true,audio:true})
        .then((currentstream) => {
            console.log(currentstream);
            setStream(currentstream);
            myvideo.current.srcObject=currentstream;
            myvideo.current.muted=true;
        }); 
        sock.on('me',data=>{
            console.log(data);
            setId(data);
        });

    },[]);

    
    return (
        
        <div className="Home">
            <div className="Home__container">
                <div className="video">
                    {stream && <video ref={myvideo} autoPlay></video> }
                    
                </div>
                <div className="texteditor">
                    <Compiler sock={sock}/>
                </div>
            </div>
        </div>
    )
}

export default Home
