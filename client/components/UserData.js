import React, { useState } from 'react';
import FinalRound from './FinalRound';
import Technical from './Technical';
import Phone from './Phone';
import Applied from './Applied';

function UserData(props) {
    console.log(props)
    return(
        <div>
            <div>
                <FinalRound finalRound={props.finalRound} />
            </div>
            <div>
                <Technical 
                technical={props.technical}
                handleSwitchToFinalRound={props.handleSwitchToFinalRound} />
            </div>
            <div>
                <Phone 
                phone={props.phone}
                handleSwitchToTechnical={props.handleSwitchToTechnical} />
            </div>
            <div>
                <Applied 
                applied={props.applied} 
                handleSwitchToPhone={props.handleSwitchToPhone} />
            </div>
        </div>
    )

}

export default UserData;