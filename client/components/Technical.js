import React, { useState } from 'react';
import Listing from './Listing';

function Technical () {
    const newListing = [];
    for (let i = 0; i < newListing.length; i++) {
        newListing.push(<Listing />)
    }
    return(
        <div>
            <h2>Technical Interview</h2>
            {newListing}
        </div>
    )
}

export default Technical;