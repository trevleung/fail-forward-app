import React, { useState } from 'react';
import Listing from './Listing';

function FinalRound(props) {
    const newListing = [];
    for (let i = 0; i < props.finalRound.length; i++) {
        newListing.push(<Listing 
            key={i}
            id={i}
            jobListing={props.finalRound}/>)
    }
    return(
        <div>
            <h2>Final Round</h2>
            {newListing}
        </div>
    )
    
}

export default FinalRound;