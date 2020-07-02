import React from 'react';

// From Sean McPherson on Medium
export const Emoji = props => (
    <span className='emoji'
          role='img'
          aria-label={props.label ? props.label : ''}
          aria-hidden={props.label ? 'false' : 'true'} >
        {props.symbol}
    </span>
);
