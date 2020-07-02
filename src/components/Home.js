import React from 'react';
import { IntroBlock } from './IntroBlock';
import { AboutBlock } from './AboutBlock';
import { ProfessionalBlock } from './ProfessionalBlock';
import { CollegeBlock } from './CollegeBlock';
import { ProjectsBlock } from './ProjectsBlock';
import { OtherBlock } from './OtherBlock';
import { Footer } from './Footer';
import '../styles.css';

export const Home = () => (
    <div className='content'>
        <IntroBlock />
        <AboutBlock />
        <ProfessionalBlock />
        <CollegeBlock />
        <ProjectsBlock />
        <OtherBlock />
        <Footer date='June 27 2020' />
    </div>
);
