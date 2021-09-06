import React from 'react'
import './compiler.css';
import { TextField } from '@material-ui/core';

function compiler() {
    return (
        <>
        <textarea className='compiler'>/******************************************************************************

        Welcome to Online compiler.
        It is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
        C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
        Code, Compile, Run and Debug online from anywhere in world.
        
        *******************************************************************************/</textarea>
        <textarea id='compiler__input' className='compiler__input' placeholder="Input" ></textarea>
        <textarea id='compiler__output' className='compiler__output' placeholder="Output"></textarea>
        </>
    )
}

export default compiler
