import React, { useState } from 'react';
import Listing from './Listing';

function Technical(props) {
    
    const newListing = [];
    for (let i = 0; i < props.technical.length; i++) {
        newListing.push(<Listing 
            key={i}
            id={i}
            jobListing={props.technical}
            switchFunc={props.handleSwitchToFinalRound}/>)
    }

    return(
        <div>
            <h2>Technical Interview</h2>
            {newListing}
        </div>
    )
}

export default Technical;