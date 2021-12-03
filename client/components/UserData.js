import React, { useState } from 'react';
import FinalRound from './FinalRound';
import Technical from './Technical';
import Phone from './Phone';
import Applied from './Applied';

function UserData(props) {
    return(
        <div className='split right'>
            <div className='centered2'>
                <FinalRound finalRound={props.finalRound}
                conversionFinalRound={props.conversionFinalRound}
                handleSwitchToTechnical={props.handleSwitchToTechnical}
                deleteListing={props.deleteListing}
                createCookie={props.createCookie} />
            </div>
            <div className='centered2'>
                <Technical 
                technical={props.technical}
                handleSwitchToFinalRound={props.handleSwitchToFinalRound}
                handleSwitchToPhone={props.handleSwitchToPhone}
                conversionTechnical={props.conversionTechnical}
                deleteListing={props.deleteListing}
                createCookie={props.createCookie} />
            </div>
            <div className='centered2'>
                <Phone 
                phone={props.phone}
                handleSwitchToTechnical={props.handleSwitchToTechnical}
                conversionPhone={props.conversionPhone}
                handleSwitchtoApplied={props.handleSwitchtoApplied}
                deleteListing={props.deleteListing}
                createCookie={props.createCookie} />
            </div>
            <div className='centered2'>
                <Applied 
                applied={props.applied} 
                handleSwitchToPhone={props.handleSwitchToPhone}
                deleteListing={props.deleteListing}
                createCookie={props.createCookie} />
            </div>
        </div>
    )

}

export default UserData;