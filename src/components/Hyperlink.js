import React from 'react';


export const Hyperlink = ({ cl, href, text}) => (
    <a className={cl}
       target='_blank'
       rel='noopener noreferrer'
       href={href} >
        {text}
    </a>
);
