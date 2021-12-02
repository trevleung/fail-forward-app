import React, { useState } from 'react';
import Input from './Input';
import UserData from './UserData';

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


    function getData(data) {
        fetch("http://localhost:8080/api/")
            .then((receive) => receive.json())
            .then((data) => data);
    }

    function postData(data) {
        fetch("http://localhost:8080/api/", {
            method: "POST",
            body: JSON.stringify({
                    company: document.querySelector('#company').value,
                    position: document.querySelector('#position').value,
                    summary: document.querySelector('#summary').value,
                    coreValues: document.querySelector('#coreValues').value
                })
            })
    }

    function postAuthen(data) {
        fetch("http://localhost:8080/login/", {
            method: "POST",
            body: JSON.stringify({
                    username: document.querySelector('#username').value,
                    password: document.querySelector('#password').value,
                })
            })
    }

    function updateData(data) {

    }

    function deleteData(data) {

    }

    function handleLogin() {
        loginProcess(true);
    }


    function handleClick() {
        const newL = {
            company: document.querySelector('#company').value,
            position: document.querySelector('#position').value,
            summary: document.querySelector('#summary').value,
            coreValues: document.querySelector('#coreValues').value
        }
        pushToApplied([...applied, newL]);
    }
    
    function handleSwitchtoApplied(obj, id, from) {
        const length1 = phone.length;
        const length2 = applied.length;
        pushToApplied([...applied, obj]);
        if (from === 'phone') deleteListing('phone', id);
        conversionPhoneFunc((length1 + 1) / (length2 + length1 + 1) * 100);
    }

    function handleSwitchToPhone(obj, id, from) {
        const length1 = phone.length;
        const length2 = applied.length;
        pushToPhone([...phone, obj]);
        if (from === 'applied') deleteListing('applied', id);
        if (from === 'technical') deleteListing('technical', id);
        conversionPhoneFunc((length1 + 1) / (length2 + length1 + 1) * 100);
    }

    function handleSwitchToTechnical(obj, id, from) {
        const length1 = technical.length;
        const length2 = phone.length;
        const length3 = applied.length;
        pushToTechnical([...technical, obj]);
        if (from === 'finalRound') deleteListing('finalRound', id);
        if (from === 'phone') deleteListing('phone', id);
        conversionTechnicalFunc((length1 + 1) / (length2 + length3 + length1 + 1) * 100);
    }

    function handleSwitchToFinalRound(obj, id, from) {
        const length1 = finalRound.length;
        const length2 = technical.length;
        const length3 = phone.length;
        const length4 = applied.length;
        pushToFinalRound([...finalRound, obj]);
        if (from === 'technical') deleteListing('technical', id);
        conversionFinalRoundFunc((length1 + 1) / (length2 + length3 + length4 + length1 + 1) * 100);;
    }

    function deleteListing(level, index) {
        if (level === 'applied') {
            const newApplied = [...applied];
            newApplied.splice(index, 1);
            pushToApplied(newApplied);
        } else if (level === 'phone') {
            const newPhone = [...phone];
            newPhone.splice(index, 1);
            pushToPhone(newPhone);
        } else if (level === 'technical') {
            const newTechnical = [...technical];
            newTechnical.splice(index, 1);
            pushToTechnical(newTechnical);
        } else if (level === 'finalRound') {
            const newFinalRound = [...finalRound];
            newFinalRound.splice(index, 1);
            pushToFinalRound(newFinalRound);
        }
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
                    deleteListing={deleteListing} />
                </div>
            </div>
        )} else {
            return (
                <div>
                    <img src={logo1} alt='logo1' height='100'></img>
                    <img src={logo2} alt='logo2' height='100'></img>
                    <h1>Login Here</h1>
                    <p>Username: </p>
                    <input className='login' id='username' />
                    <p>Password: </p>
                    <input className='login' id='password' />
                    <button onClick={handleLogin}>X</button>
                </div>
            )
        }
}

export default App;