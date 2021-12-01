import React, { useState } from 'react';
import Listing from './Listing';

function Phone(props) {
    const newListing = [];
    for (let i = 0; i < newListing.length; i++) {
        newListing.push(<Listing />)
    }
    return(
        <div>
            <h2>Phone Interview</h2>
            {newListing}
        </div>
    )
    
}

export default Phone;