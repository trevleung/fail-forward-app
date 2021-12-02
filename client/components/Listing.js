import React, { useState } from 'react';

// when ^ click is clicked listing be called in phone interview as a listing, and this listing will be deleted

function Listing(props) {  
    // console.log(`this is from listing`,props.jobListing[props.id])
    return(
        <div>
            <span>{props.jobListing[props.id].company}</span>
            <button onClick={() => {
                const currListing = {...props.jobListing[props.id]};
                return props.switchFunc(currListing, props.id, props.level)}}>^</button>
            <button onClick={() => {
                const currentListing = {...props.jobListing[props.id]};
                return props.downFunc(currentListing, props.id, props.level)}}>v</button>
            <button onClick={() => props.deleteListing(props.level, props.id)}>X</button>
            <button onClick={() => props.createCookie(props.level, props.id)}>?</button>
        </div>
    )
}

export default Listing;