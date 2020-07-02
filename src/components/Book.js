import React from 'react';
import { Emoji } from './Emoji';
import '../styles.css';

export const Book = ({ emoji, title, author }) => (
    <p>
        <Emoji symbol={emoji} /> {title} <span className='author'>- {author}</span>
    </p>
);
