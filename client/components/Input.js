import React, { useState } from 'react';
import logo1 from './assets/fail.png';
import logo2 from './assets/forward.png';
// https://www.fontspace.com/citricacid-font-f61815

function Input (props) {
    return(
        <div className='split left centered3'>
            <img className='forward' src={logo1} alt='logo1' height='100'></img>
            <img src={logo2} alt='logo2' height='100'></img>
            <p id='companyName'>Company: </p>
            <input className='inputBar' id='company' />
            <p>Position: </p>
            <input className='inputBar' id='position' />
            <p>Job Posting Summary: </p>
            <textarea className='inputBox' id='summary' type='text' cols='30' rows='6'></textarea>
            <p>Company Core Values: </p>
            <textarea className='inputBox' id='coreValues' type='text' cols='30' rows='6'></textarea>
            <div>
                <button data-title="Submit" className='loginButton' onClick={(() => {
                    props.postData()
                    props.handleClick()})}></button>
            </div>
        </div>
    )
    
}

export default Input;