import React from 'react';
import { Emoji } from './Emoji';
import { ProjectTech } from './ProjectTech';


export const Project = props => {
    const { emoji, name, duration, description, tech, featuredVersion } = props;
    let createUniqueKey = paragraph => {
        let result = name.concat(paragraph.slice(0, 5));
        result = result.concat(emoji);
        result = result.concat(paragraph[-1]);
        return result;
    }

    let formatDescription = description =>
        description.map(paragraph => (<p className='project-content multi-content' key={createUniqueKey(paragraph)}>
                                          {paragraph}
                                      </p>));

    if (featuredVersion) {
        return (
            <div>
                <p className='project-name'>
                    <Emoji symbol={emoji} /> {name} <ProjectTech tech={tech} />
                </p>
                <p className='project-content project-duration'>{duration}</p>
                <p className='project-content multi-content'>{description[0]}</p>
            </div>
        );
    }
    return (
        <div className='project'>
            <p className='project-name'>
                <Emoji symbol={emoji} /> {name} <ProjectTech tech={tech} />
            </p>
            <p className='project-content project-duration multi-content'>{duration}</p>
            {formatDescription(description)}
        </div>
    );
}
