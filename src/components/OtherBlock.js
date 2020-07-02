import React from 'react';
import { Emoji } from './Emoji';
import { Link } from 'react-router-dom';
import '../styles.css';

export const OtherBlock = () => (
    <div className='block'>
        <div className='header'>Other Things</div>
        <p><Emoji symbol='📚' /> <Link to='./books'>Books I've read</Link></p>
        <p><Emoji symbol='🐶' /> My two puppies</p>
    </div>
);
