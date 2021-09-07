import { createContext,useState,useEffect,useRef } from "react";
import connect from '../../utils/Socket';
import { io } from "socket.io-client";
import peer from 'simple-peer';

const socketcontext=createContext();
const socketconnection=io('http://localhost/5000/socket/connect/1234');

const ContextProvider =({children})=>{

    const [stream,setStream]=useState(null);
    const [id,setId]=useState('');

    const myvideo=useRef();

    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video:true,audio:true})
        .then((currentstream) => {
            setStream(currentstream);
            /*myvideo.current.srcObject=currentstream;*/
        });
        
        socketconnection.on('me',data=>{
            setId(data);
        });

    },[]);

    const answercall=()=>{

    }

    const calluser=()=>{

    }

    const leavecall=()=>{


    }

    return(
        <socketcontext.Provider value={{
            id,
            stream,
            myvideo,
            calluser,
            leavecall,
            answercall,
        }}>
            {children}
        </socketcontext.Provider>
    )
}

export {socketcontext,ContextProvider};