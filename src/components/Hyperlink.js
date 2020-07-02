import React from 'react';
import '../styles.css';

export const Hyperlink = ({ cl, href, text}) => (
    <a className={cl}
       target='_blank'
       rel='noopener noreferrer'
       href={href} >
        {text}
    </a>
);
