import React from 'react';
import '../Css/home.css';
import Compiler from '../components/compiler/compiler';
import API from '../utils/API'
import connect from '../utils/Socket';

const connectSocket = async ()=>{
     await fetch(`${API}/socket/connect/id`);
     const socket = connect ();
     socket.emit('hi');
}



function Home() {
    connectSocket ()
    return (
        <div className="Home">
            <div className="Home__container">
                <div className="video">

                </div>
                <div className="texteditor">
                    <Compiler/>
                </div>
            </div>
        </div>
    )
}

export default Home
