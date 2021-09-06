import React,{useContext} from 'react';
import '../Css/home.css';
import Compiler from '../components/compiler/compiler';
import { socketcontext } from '../components/Socketconext/Socketconext';

function Home() {
    const context= useContext(socketcontext);
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
