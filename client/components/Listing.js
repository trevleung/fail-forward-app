import React, { useState } from 'react';

// when ^ click is clicked listing be called in phone interview as a listing, and this listing will be deleted

function Listing(props) {  
    // console.log(`this is from listing`,props.jobListing[props.id])
    return(
        <div>
            <span>{props.jobListing[props.id].company}</span>
            <button onClick={() => {
                const currListing = {...props.jobListing[props.id]};
                return props.switchFunc(currListing)}}>^</button>
            <button>v</button>
            <button>X</button>
        </div>
    )
}

export default Listing;