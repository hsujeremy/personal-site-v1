import React from 'react';
import { Title } from './Title.js';
import { ProfileImage } from './ProfileImage';
import '../styles.css';

export const IntroBlock = () => (
    <div className='intro-block'>
        <ProfileImage />
        <Title />
    </div>
);
