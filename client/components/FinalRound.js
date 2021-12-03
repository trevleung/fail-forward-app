import React, { useState } from 'react';
import Listing from './Listing';

function FinalRound(props) {
    const newListing = [];
    for (let i = 0; i < props.finalRound.length; i++) {
        newListing.push(<Listing 
            key={i}
            id={i}
            jobListing={props.finalRound}
            downFunc={props.handleSwitchToTechnical}
            deleteListing={props.deleteListing}
            level='finalRound'
            createCookie={props.createCookie} />)
    }
    return(
        <div>
            <h2>Final Round</h2>
            <span className='conv'>Converion Rates {props.conversionFinalRound}%</span>
            {newListing}
        </div>
    )
    
}

export default FinalRound;