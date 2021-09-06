import React from 'react';
import '../Css/home.css';
import Compiler from '../components/compiler/compiler';
import connect from '../utils/Socket';

const socket=connect();

function Home() {
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
