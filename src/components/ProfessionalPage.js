import React, { Component } from 'react';
import { Banner } from './Banner';
import { Job } from './Job';
import data from '../assets/content-data.json';


export class ProfessionalPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Jeremy - Experience"
    }

    render() {
        let createPositionList = positions => (
            positions.map(position => (
                <Job emoji={position.emoji}
                     company={position.company}
                     position={position.position}
                     team={position.team}
                     duration={position.duration}
                     description={position.description}
                />
            ))
        );

        return (
            <div className='content'>
                <Banner keywords={['Experience']} loop={false} />
                <div className='block'>
                    <div className='header'>Industry</div>
                    {createPositionList(data.experience.work)}
                </div>
                <div className='block'>
                    <div className='header'>Research</div>
                    {createPositionList(data.experience.research)}
                </div>
            </div>

        )
    }
}
