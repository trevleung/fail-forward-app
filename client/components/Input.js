import React, { useState } from 'react';
import logo1 from './assets/fail.png';
import logo2 from './assets/forward.png';
// https://www.fontspace.com/citricacid-font-f61815

function Input (props) {
    return(
        <div>
            <img src={logo1} alt='logo1' height='100'></img>
            <img src={logo2} alt='logo2' height='100'></img>
            <p>Company: </p>
            <input className='inputBar' id='company' />
            <p>Position: </p>
            <input className='inputBar' id='position' />
            <p>Job Posting Summary: </p>
            <textarea className='inputBox' id='summary' type='text' cols='30' rows='6'></textarea>
            <p>Company Core Values: </p>
            <textarea className='inputBox' id='coreValues' type='text' cols='30' rows='6'></textarea>
            <button onClick={props.handleClick}>Submit</button>
        </div>
    )
    
}

export default Input;