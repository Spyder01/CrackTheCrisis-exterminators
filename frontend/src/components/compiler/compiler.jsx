import React,{useState} from 'react'
import './compiler.css';

function Compiler(props) {
    const[code,setCode]=useState(`/******************************************************************************

    Welcome to Online compiler.
    It is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
    C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
    Code, Compile, Run and Debug online from anywhere in world.
    
    *******************************************************************************/`);
    const[output,setOutput]=useState('');
    const[input,setInput]=useState('');
    const[language,setLanguage]=useState('C');
    const updateCode=(e)=>{
        setCode(e.target.value);
    }

    const updateinput=(e)=>{
        setInput(e.target.value);
    }

    const senddata=(e)=>{
        setOutput('');
        const lang=language;
        console.log(language);
        const code=e.target.parentElement.childNodes[0].value;
        const input=e.target.parentElement.childNodes[1].value;
        props.sock.emit('data',{lang,code,input});
        props.sock.on('data',data=>{
            setOutput(data);
        })
    }

    

    return (
        <>
        <textarea className='compiler' value={code} onChange={(e)=>{updateCode(e)}} >/******************************************************************************

        Welcome to Online compiler.
        It is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
        C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
        Code, Compile, Run and Debug online from anywhere in world.
        
        *******************************************************************************/</textarea>
        <textarea id='compiler__input' className='compiler__input' placeholder="Input" onChange={(e)=>updateinput(e)} ></textarea>
        <textarea id='compiler__output' className='compiler__output' placeholder="Output" value={output}></textarea>
        <button onClick={(e)=>senddata(e)} className='run'>▷ Run</button>
        <select val={language} onChange={(e)=>{setLanguage(e.target.value)}} id='language'>
            <option val="C">C</option>
            <option val="Cpp">Cpp</option>
            <option val="Java">Java</option>
        </select>
        </>
    )
}

export default Compiler
