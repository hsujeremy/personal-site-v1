import React from 'react';
import { Emoji } from './Emoji';
import { ProjectTech } from './ProjectTech';


export const Project = ({ emoji, name, duration, predescription, description, tech }) => (
    <div className='project'>
        <p className='project-name'>
            <Emoji symbol={emoji} /> {name} <ProjectTech tech={tech} />
        </p>
        <p className='project-content project-duration'>{duration}</p>
        <p className='project-content'>{predescription}</p>
        <p className='project-content multi-content'>{description}</p>
    </div>
);
