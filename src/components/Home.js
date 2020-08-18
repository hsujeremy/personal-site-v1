import React, { Component } from 'react';
import { IntroBlock } from './IntroBlock';
import { AboutBlock } from './AboutBlock';
import { ProfessionalBlock } from './ProfessionalBlock';
import { CollegeBlock } from './CollegeBlock';
import { ProjectsBlock } from './ProjectsBlock';
import { OtherBlock } from './OtherBlock';
import '../styles.css';


export class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Jeremy Hsu'
    }

    render() {
        return (
            <div className='content'>
                <IntroBlock />
                <AboutBlock />
                <ProfessionalBlock />
                <CollegeBlock />
                <ProjectsBlock />
                <OtherBlock />
            </div>
        );
    }
};
