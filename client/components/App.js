import React, { useState } from 'react';
import Input from './Input';
import UserData from './UserData';

function App() {
    const [ jobListings, pushListing ] = useState([]);
    
    function handleClick() {
        const newL = {
            company: document.querySelector('#company').value,
            position: document.querySelector('#position').value,
            summary: document.querySelector('#summary').value,
            coreValues: document.querySelector('#coreValues').value
        }
        pushListing([...jobListings, newL]);
    }
    return(
        <div>
            <div>
                <Input jobListings={jobListings} handleClick={handleClick}/>
            </div>
            <div>
                <UserData jobListings={jobListings} />
            </div>
        </div>
    )

}

export default App;