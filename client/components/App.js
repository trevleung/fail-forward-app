import React, { useState } from 'react';
import Input from './Input';
import UserData from './UserData';
import Cookie from './Cookie';

import logo1 from './assets/fail.png';
import logo2 from './assets/forward.png';


function App() {

    const [ login, loginProcess ] = useState(false);
    const [ applied, pushToApplied ] = useState([]);
    const [ phone, pushToPhone ] = useState([]);
    const [ technical, pushToTechnical ] = useState([]);
    const [ finalRound, pushToFinalRound ] = useState([]);
    const [ conversionPhone, conversionPhoneFunc ] = useState(0)
    const [ conversionTechnical, conversionTechnicalFunc ] = useState(0)
    const [ conversionFinalRound, conversionFinalRoundFunc ] = useState(0)
    const [ cookie, pushIntoCookie ] = useState([])


    function getDataApplied() {
        return fetch("http://localhost:8080/api/") // FIXME: when webpack serve is running, the proxy is on. But, when using npm start, webpack is not running so no proxy (therefore in production mode, it)
            .then((receive) => receive.json())
            .then((data) => {
                console.log(data);
                pushToApplied(data)});
    }

    function postData() {
        fetch("http://localhost:8080/api/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    company: document.querySelector('#company').value,
                    position: document.querySelector('#position').value,
                    summary: document.querySelector('#summary').value,
                    coreValues: document.querySelector('#coreValues').value
                })
            })
    }

    function postAuthen() {
        console.log(document.querySelector('#username').value)
        console.log(document.querySelector('#password').value)
        fetch("http://localhost:8080/login/", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                    username: document.querySelector('#username').value,
                    password: document.querySelector('#password').value,
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                if (data[0]) {
                    loginProcess(true);
                }
            })
    }

    function updateData(data) {

    }

    function deleteData(data) {

    }


    function handleClick() {
        const newL = {
            company: document.querySelector('#company').value,
            position: document.querySelector('#position').value,
            summary: document.querySelector('#summary').value,
            coreValues: document.querySelector('#coreValues').value
        }
        pushToApplied([...applied, newL]);
        const length1 = finalRound.length;
        const length2 = technical.length;
        const length3 = phone.length;
        const length4 = applied.length;
        conversionFinalRoundFunc(Math.round((length1) / (length2 + length3 + length4 + length1 + 1) * 100))
        conversionTechnicalFunc(Math.round((length2) / (length3 + length4 + length2 + 1) * 100));
        conversionPhoneFunc(Math.round((length3) / (length4 + length3 + 1) * 100));
    }
    
    function handleSwitchtoApplied(obj, id, from) {
        const length1 = phone.length;
        const length2 = applied.length;
        pushToApplied([...applied, obj]);
        if (from === 'phone') deleteListing('phone', id);
        conversionPhoneFunc(Math.round((length1 + 1) / (length2 + length1 + 1) * 100));
    }

    function handleSwitchToPhone(obj, id, from) {
        const length1 = phone.length;
        const length2 = applied.length;
        pushToPhone([...phone, obj]);
        if (from === 'applied') deleteListing('applied', id);
        if (from === 'technical') deleteListing('technical', id);
        conversionPhoneFunc(Math.round((length1 + 1) / (length2 + length1 + 1) * 100));
    }

    function handleSwitchToTechnical(obj, id, from) {
        const length1 = technical.length;
        const length2 = phone.length;
        const length3 = applied.length;
        pushToTechnical([...technical, obj]);
        if (from === 'finalRound') deleteListing('finalRound', id);
        if (from === 'phone') deleteListing('phone', id);
        conversionTechnicalFunc(Math.round((length1 + 1) / (length2 + length3 + length1 + 1) * 100));
    }

    function handleSwitchToFinalRound(obj, id, from) {
        const length1 = finalRound.length;
        const length2 = technical.length;
        const length3 = phone.length;
        const length4 = applied.length;
        pushToFinalRound([...finalRound, obj]);
        if (from === 'technical') deleteListing('technical', id);
        conversionFinalRoundFunc(Math.round((length1 + 1) / (length2 + length3 + length4 + length1 + 1) * 100));
    }

    function deleteListing(level, index) {
        const length1 = finalRound.length;
        const length2 = technical.length;
        const length3 = phone.length;
        const length4 = applied.length;
        if (level === 'applied') {
            const newApplied = [...applied];
            newApplied.splice(index, 1);
            pushToApplied(newApplied);
            conversionFinalRoundFunc(Math.round((length1) / (length2 + length3 + length4 + length1 - 1) * 100))
            conversionTechnicalFunc(Math.round((length2) / (length3 + length4 + length2 - 1) * 100));
            conversionPhoneFunc(Math.round((length3) / (length4 + length3 - 1) * 100));
        } else if (level === 'phone') {
            const newPhone = [...phone];
            newPhone.splice(index, 1);
            pushToPhone(newPhone);
            conversionFinalRoundFunc(Math.round((length1) / (length2 + length3 + length4 + length1 - 1) * 100))
            conversionTechnicalFunc(Math.round((length2) / (length3 + length4 + length2 - 1) * 100));
            conversionPhoneFunc(Math.round((length3 - 1) / (length4 + length3 - 1) * 100));
        } else if (level === 'technical') {
            const newTechnical = [...technical];
            newTechnical.splice(index, 1);
            pushToTechnical(newTechnical);
            conversionFinalRoundFunc(Math.round((length1) / (length2 + length3 + length4 + length1 - 1) * 100))
            conversionTechnicalFunc(Math.round((length2 - 1) / (length3 + length4 + length2 - 1) * 100));
            conversionPhoneFunc(Math.round((length3) / (length4 + length3 - 1) * 100));
        } else if (level === 'finalRound') {
            const newFinalRound = [...finalRound];
            newFinalRound.splice(index, 1);
            pushToFinalRound(newFinalRound);
            conversionFinalRoundFunc(Math.round((length1 - 1) / (length2 + length3 + length4 + length1 - 1) * 100))
            conversionTechnicalFunc(Math.round((length2) / (length3 + length4 + length2 - 1) * 100));
            conversionPhoneFunc(Math.round((length3) / (length4 + length3 - 1) * 100));
        }
    }

    function createCookie(level, id) {
        console.log('this is cookie', cookie);
        pushIntoCookie([...cookie, 'cookie']);
        deleteListing(level, id);
        conversionFinalRoundFunc(Math.round((length1 - 1) / (length2 + length3 + length4 + length1 + 1) * 100))
        conversionTechnicalFunc(Math.round((length2 - 1) / (length3 + length4 + length2 + 1) * 100));
        conversionPhoneFunc(Math.round((length3 - 1) / (length4 + length3 + 1) * 100));
    }

    if (login === true) {
        return(
            <div>
                <div>
                    <Input 
                    applied={applied} 
                    handleClick={handleClick}
                    postData={postData} />
                </div>
                <div>
                    <UserData 
                    conversionPhone={conversionPhone}
                    conversionTechnical={conversionTechnical}
                    conversionFinalRound={conversionFinalRound}
                    applied={applied} 
                    phone={phone}
                    technical={technical}
                    finalRound={finalRound}
                    handleSwitchToPhone={handleSwitchToPhone}
                    handleSwitchToTechnical={handleSwitchToTechnical}
                    handleSwitchToFinalRound={handleSwitchToFinalRound}
                    handleSwitchtoApplied={handleSwitchtoApplied}
                    deleteListing={deleteListing} 
                    createCookie={createCookie} />
                </div>
                <div>
                    <Cookie cookie={cookie}/>
                </div>
            </div>
        )} else {
            return (
                <div className='centered'>
                    <img className='forward' src={logo1} alt='logo1' height='150'></img>
                    <img src={logo2} alt='logo2' height='150'></img>
                    <p id='usernameWord'>Username: </p>
                    <input className='inputBar' id='username' />
                    <p>Password: </p>
                    <input className='inputBar' type='password' id='password' />
                    <div>
                    <button data-title="Login" className='loginButton' onClick={() => {
                        getDataApplied()
                        postAuthen()}}></button>
                    </div>
                </div>
            )
        }
}

export default App;