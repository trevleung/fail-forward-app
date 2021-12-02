import React, { useState } from 'react';
import Listing from './Listing';

function Phone(props) {

    const newListing = [];
    for (let i = 0; i < props.phone.length; i++) {
        newListing.push(<Listing 
            key={i}
            id={i}
            jobListing={props.phone}
            switchFunc={props.handleSwitchToTechnical}
            downFunc={props.handleSwitchtoApplied}
            deleteListing={props.deleteListing}
            level='phone'
            createCookie={props.createCookie} />)
    }

    return(
        <div>
            <h2>Phone Interview</h2>
            <span>Converion Rates {props.conversionPhone}%</span>
            {newListing}
        </div>
    )
    
}

export default Phone;