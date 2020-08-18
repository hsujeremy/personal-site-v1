import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';


export const Banner = ({ keywords, loop }) => {
    let name = <Link id='banner-name' to='/'>Jeremy Hsu</Link>
    if (window.innerWidth >= 860) {
        return (
            <div className='banner'>
                {name} · <Typed strings={keywords}
                                typeSpeed={75}
                                backSpeed={75}
                                startDelay={500}
                                backDelay={500}
                                smartBackspace={false}
                                loop={loop}
                                showCursor={false}
                         />
            </div>
        );
    }
    return <div className='banner'>{name}</div>;
};
