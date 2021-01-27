import React from 'react';
import { Link } from 'react-router-dom';
import { Hyperlink } from './Hyperlink';


let dmClass = 'datamatch';
let dmHref = 'https://quarantine.datamatch.me/';
let dmText = 'Datamatch';

export const CollegeBlock = () => (
    <div className='block'>
        <div className='header'>College Life</div>
        <p className='multi-content'>I will be returning to Harvard in September as a sophomore.</p>
        <p className='multi-content'>
            During my freshman year, my technical course load covered functional programming, linear algebra, and
            differential equations. I also studied the product design process and worked closely with 3-4 classmates to
            pitch two app concepts conforming to the latest UI/UX design and inclusivity practices.
        </p>
        <p className='multi-content'>
            <Link className='multi-content' to='/classes'>All Coursework</Link>
        </p>
        <p className='multi-content'>
            Outside of classes, I'm helping to implement the matching algorithm for <Hyperlink cl={dmClass} href={dmHref} text={dmText} />,
            a student-run organization that connects students with compatible personalities over free meals from local
            businesses every February. I'm also involved with the Harvard Computer Society and have previously attempted
            to dance for Expressions.
        </p>
    </div>
);
