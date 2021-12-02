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
                <FinalRound finalRound={props.finalRound}
                conversionFinalRound={props.conversionFinalRound}
                handleSwitchToTechnical={props.handleSwitchToTechnical}
                deleteListing={props.deleteListing} />
            </div>
            <div>
                <Technical 
                technical={props.technical}
                handleSwitchToFinalRound={props.handleSwitchToFinalRound}
                handleSwitchToPhone={props.handleSwitchToPhone}
                conversionTechnical={props.conversionTechnical}
                deleteListing={props.deleteListing} />
            </div>
            <div>
                <Phone 
                phone={props.phone}
                handleSwitchToTechnical={props.handleSwitchToTechnical}
                conversionPhone={props.conversionPhone}
                handleSwitchtoApplied={props.handleSwitchtoApplied}
                deleteListing={props.deleteListing} />
            </div>
            <div>
                <Applied 
                applied={props.applied} 
                handleSwitchToPhone={props.handleSwitchToPhone}
                deleteListing={props.deleteListing} />
            </div>
        </div>
    )

}

export default UserData;