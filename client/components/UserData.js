import React, { useState } from 'react';
import FinalRound from './FinalRound';
import Technical from './Technical';
import Phone from './Phone';
import Applied from './Applied';

function UserData(props) {
    return(
        <div>
            <div>
                <FinalRound jobListings={props.jobListings} />
            </div>
            <div>
                <Technical jobListings={props.jobListings} />
            </div>
            <div>
                <Phone jobListings={props.jobListings} />
            </div>
            <div>
                <Applied jobListings={props.jobListings} />
            </div>
        </div>
    )

}

export default UserData;