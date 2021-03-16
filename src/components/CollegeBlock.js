import React from 'react';
import { Link } from 'react-router-dom';
// import { Hyperlink } from './Hyperlink';


// let dmClass = 'datamatch';
// let dmHref = 'https://quarantine.datamatch.me/';
// let dmText = 'Datamatch';

export const CollegeBlock = () => (
    <div className='block'>
        <div className='header'>College Life</div>
        <p className='multi-content'>I will be returning to Harvard in September as a sophomore.</p>
        <p className='multi-content'>
            <Link className='multi-content' to='/classes'>Coursework</Link>
        </p>
        <p className='multi-content'>
            Outside of classes, I help write the scoring and matching algorithms for Datamatch, a student-run
            organization that connects students with compatible personalities over free meals from local businesses. I'm
            also involved with the Harvard Computer Society and have previously attempted to dance for Expressions.
        </p>
    </div>
);
