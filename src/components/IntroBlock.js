import React from 'react';
import { Title } from './Title.js';
import { ProfileImage } from './ProfileImage';


export const IntroBlock = () => (
    <div className='intro-block'>
        <ProfileImage />
        <Title />
    </div>
);
