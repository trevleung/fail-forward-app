import React, { useState } from 'react';

// listing component queries DB to grab all approriate listing from either finalRound, tech, phone, or applied

function Listing(props) {  
    return(
        <div>
            <span>{props.jobListings[props.id].company}</span>
            <button>^</button>
            <button>v</button>
            <button>X</button>
        </div>
    )
}

export default Listing;