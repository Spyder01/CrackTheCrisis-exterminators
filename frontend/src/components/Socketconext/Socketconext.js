import { createContext,useState,useEffect,useRef } from "react";
import connect from '../../utils/Socket';
import peer from 'simple-peer';

const socketcontext=createContext();
const socket=connect();

const ContextProvider =(({children})=>{

    const [stream,setStream]=useState(null);
    const [id,setId]=useState('');

    const myvideo=useRef();

    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({video:true,audio:true})
        .then((currentstream) => {
            myvideo.current.srcObject=currentstream;
        })
        
        socket.on('me',data=>{
            setId(data);
        })

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
            {children};
        </socketcontext.Provider>
    )
})

export {socketcontext,ContextProvider};