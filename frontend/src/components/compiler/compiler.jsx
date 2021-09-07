import React,{useState} from 'react'
import './compiler.css';

function Compiler() {

    const[code,setCode]=useState(`/******************************************************************************

    Welcome to Online compiler.
    It is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
    C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
    Code, Compile, Run and Debug online from anywhere in world.
    
    *******************************************************************************/`);
    const updateCode=(e)=>{
        setCode(e.target.value);
        console.log(e);
    }
    const click=(e)=>{
        console.log(e.target.parentElement.childNodes[0].value);
        
    }

    return (
        <>
        <textarea className='compiler' value={code} onChange={(e)=>{updateCode(e)}} >/******************************************************************************

        Welcome to Online compiler.
        It is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
        C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
        Code, Compile, Run and Debug online from anywhere in world.
        
        *******************************************************************************/</textarea>
        <textarea id='compiler__input' className='compiler__input' placeholder="Input" onChange={updateCode} ></textarea>
        <textarea id='compiler__output' className='compiler__output' placeholder="Output"></textarea>
        <button onClick={(e)=>click(e)} className='run'>▷ Run</button>
        </>
    )
}

export default Compiler
