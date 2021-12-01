import React, { useState } from 'react';
import Listing from './Listing';

function Applied (props) {
    const newListing = [];
    for (let i = 0; i < props.jobListings.length; i++) {
        newListing.push(<Listing 
            key={i}
            id={i}
            jobListings={props.jobListings}
        />)
    }
    return(
        <div>
            <h2>Applied Listings</h2>
            {newListing}
        </div>
    )
}

export default Applied;