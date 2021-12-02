import React, { useState } from 'react';
import Input from './Input';
import UserData from './UserData';

function App() {

    const [ applied, pushToApplied ] = useState([]);
    const [ phone, pushToPhone ] = useState([]);
    const [ technical, pushToTechnical ] = useState([]);
    const [ finalRound, pushToFinalRound ] = useState([]);

    function handleClick() {
        const newL = {
            company: document.querySelector('#company').value,
            position: document.querySelector('#position').value,
            summary: document.querySelector('#summary').value,
            coreValues: document.querySelector('#coreValues').value
        }
        pushToApplied([...applied, newL]);
    }
    function handleSwitchToPhone(obj) {
        pushToPhone([...phone, obj]);
    }
    function handleSwitchToTechnical(obj) {
        pushToTechnical([...technical, obj]);
        console.log('🚀 ~ handleSwitchToTechnical ~ technical state', technical)
    }
    function handleSwitchToFinalRound(obj) {
        pushToFinalRound([...finalRound, obj]);
    }

    return(
        <div>
            <div>
                <Input applied={applied} handleClick={handleClick}/>
            </div>
            <div>
                <UserData 
                applied={applied} 
                phone={phone}
                technical={technical}
                finalRound={finalRound}
                handleSwitchToPhone={handleSwitchToPhone}
                handleSwitchToTechnical={handleSwitchToTechnical}
                handleSwitchToFinalRound={handleSwitchToFinalRound} />
            </div>
        </div>
    )

}

export default App;