import React from 'react';
import '../styles.css';

export const Footer = ({ date }) => {
    return (window.innerHeight < 1200 ? '' : <div className='footer'>Updated {date}</div>);
}
