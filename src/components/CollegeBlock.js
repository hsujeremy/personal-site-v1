import React from 'react';
import { Link } from 'react-router-dom';
import { Hyperlink } from './Hyperlink';
import '../styles.css';

let dmClass = 'datamatch';
let dmHref = 'https://quarantine.datamatch.me/';
let dmText = 'Datamatch';

export const CollegeBlock = () => (
    <div className='block'>
        <div className='header'>College Life</div>
        <p className='multi-content'>
            This spring, my technical course load covered programming abstractions and
            paradigms, linear algebra, and differential equations. I also studied the
            product development process and worked closely with my classmates in
            pitching two app designs integrating effective and inclusive UI design
            practices.
        </p>
        <p className='multi-content'>
            <Link className='multi-content' to='/classes'>All Coursework</Link>
        </p>
        <p className='multi-content'>
            Outside the classroom, I help implement the matching algorithms
            for <Hyperlink cl={dmClass} href={dmHref} text={dmText} />, a matchmaking
            app that works closely with local businesses to connect students over free
            food. I’m also involved with the Harvard Computer Society and dance for
            Expressions.
        </p>
    </div>
);
