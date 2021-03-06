import React, { useState } from 'react';
import Listing from './Listing';

function Applied (props) {
    const newListing = [];
    for (let i = 0; i < props.applied.length; i++) {
        newListing.push(<Listing 
            key={i}
            id={i}
            jobListing={props.applied}
            switchFunc={props.handleSwitchToPhone}
            deleteListing={props.deleteListing}
            level='applied'
            createCookie={props.createCookie} />)
    }
    return(
        <div>
            <h2>Applied Listings</h2>
            {newListing}
        </div>
    )
}

export default Applied;