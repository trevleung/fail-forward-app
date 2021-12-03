import React, { useState } from 'react';

// when ^ click is clicked listing be called in phone interview as a listing, and this listing will be deleted

function Listing(props) {  
    // console.log(`this is from listing`,props.jobListing[props.id])
    return(
        <div className='listingBox'>
            <p>Company: <b>{props.jobListing[props.id].company}</b>
            <br/>Position: <b>{props.jobListing[props.id].position}</b></p>
            <div className='butt'>
                <button className='smallButton' onClick={() => props.deleteListing(props.level, props.id)}>X</button>
                <button className='smallButton' onClick={() => props.createCookie(props.level, props.id)}>?</button>
                <button className='smallButton' onClick={() => {
                    const currListing = {...props.jobListing[props.id]};
                    return props.switchFunc(currListing, props.id, props.level)}}>^</button>
                <button className='smallButton' onClick={() => {
                    const currentListing = {...props.jobListing[props.id]};
                    return props.downFunc(currentListing, props.id, props.level)}}>v</button>
                
            </div>
        </div>
    )
}

export default Listing;