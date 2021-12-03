import React, { useState } from 'react';

import cookie from './assets/cookie2.png';

function Cookie(props) {
    const cookieArr = [];
    for (let i = 0; i < props.cookie.length; i++) {
        cookieArr.push(<img src={cookie} alt='cookie' height='100' className='cookie'></img>)
    }
    
    return(
        <div>
            {cookieArr}
        </div>
    )
    
}

export default Cookie;