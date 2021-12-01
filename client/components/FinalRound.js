import React, { useState } from 'react';
import Listing from './Listing';

function FinalRound () {
    const newListing = [];
    for (let i = 0; i < newListing.length; i++) {
        newListing.push(<Listing />)
    }
    return(
        <div>
            <h2>Final Round</h2>
            {newListing}
        </div>
    )
    
}

export default FinalRound;